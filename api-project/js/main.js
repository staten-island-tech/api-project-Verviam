import '../styles/style.css';
import { DOMSelectors } from "./dom.js"

import AOS from "aos";
import "aos/dist/aos.css";


AOS.init(); // npm install aos --save


const URL = "https://api.spoonacular.com/food/ingredients/search?apiKey=489a1ecfaf764abdbc2e562b8f0b538a&query=apple"


async function getData(url) {
    try {
        const response = await fetch(url);
        if (response.status < 200 || response.status > 299) {
            throw new Error(response.statusText);
        } else {
            const data = await response.json();
            const results = data.results
            createCard(results)
        }
    }
    catch (error) {
        console.log(error)
    }
}

const ingredientArr = []

function createCard(results) {
    results.forEach(result => {
        DOMSelectors.ingredientCard.insertAdjacentHTML("beforeend",
            `<div class = "card" data-aos="fade-right">
        <div class ="card-head" data-aos="flip-up">${result.name}</div>
        <img src = "https://spoonacular.com/cdn/ingredients_250x250/${result.image}" class = "card-img" alt="Picture of ${result.name}"/>
        <button type="submit" class="add-button" id="addIngred">Add To Current Ingredients</button> 
        `)
    })

    const addedIngredients = document.querySelectorAll(".add-button")
    addedIngredients.forEach(addedIngredient => {
        addedIngredient.addEventListener("click", clickAddToIngredients)
    })
    // function for adding to ingredient list
    function clickAddToIngredients() {
        const card = this.parentElement //returns parent element where the specific button was located
        const ingredientName = card.querySelector(".card-head")
        const ingredientNameText = ingredientName.textContent
        DOMSelectors.currentIngredients.insertAdjacentHTML("beforeend", `<br> - ${ingredientNameText}`)
        ingredientArr.push(ingredientNameText)
    }
}

// function for searching ingredient
function searchIngredient(event) {
    event.preventDefault();
    const searchValue = DOMSelectors.ingredientSearched.value;
    DOMSelectors.ingredientCard.innerHTML = ""
    const newURL = URL.replace("query=apple", `query= + ${searchValue}`)
    getData(newURL)
}
DOMSelectors.submitButton.addEventListener("click", searchIngredient);

// search for recipes based on ingredient list 
function searchRecipes() {
    const recipeURL = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=489a1ecfaf764abdbc2e562b8f0b538a&ingredients="
    for (let i=0; i<ingredientArr.length; i++){
        if ((i = 0)) {
            recipeURL.concat(ingredientArr[i]);
          } else {
            recipeURL.concat(",+" + ingredientArr[i]);
          }
    }
    getData(recipeURL) //make new getData for recipes
}
DOMSelectors.recipeSearched.addEventListener("click", searchRecipes)

// clears ingredient list
function clearButton() {
    DOMSelectors.currentIngredients.innerHTML = ""
}
DOMSelectors.clearIngredients.addEventListener("click", clearButton)


function clickChangeTheme() {

}

getData(URL)
// add food jokes
// add button for more information

// support screen readers and seo
// add filters
// make look better (change function and variable names, event listeners on top)

// "https://api.spoonacular.com/recipes/findByIngredients?apiKey=489a1ecfaf764abdbc2e562b8f0b538a&ingredients=apples,+flour,+sugar," + add max number 
// https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients
// https://spoonacular.com/food-api/docs#Get-Recipe-Card
// recipe card: "https://api.spoonacular.com/recipes/{id}/card"

// https://api.spoonacular.com/recipes/idOfrecipe/information?apiKey=
