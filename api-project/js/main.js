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
    // function for adding to current ingredients
    function clickAddToIngredients() {
        const card = this.parentElement //returns parent element where the specific button was located
        const ingredientName = card.querySelector(".card-head")
        const ingredientNameText = ingredientName.textContent
        DOMSelectors.currentIngredients.insertAdjacentHTML("beforeend", `<br> - ${ingredientNameText}`)
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
function clickSearchRecipes() {
    const recipeURL = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=489a1ecfaf764abdbc2e562b8f0b538a&ingredients="
    ingredientNameText.forEach(text => {
       const ingredientsToSearch = []
       ingredientsToSearch.push(text)
    });
    const newRecipeURL = recipeURL.replace("ingredients=", `ingredients= + ${ingredientsToSearch[0]},+`)
    getData(newRecipeURL)
}
DOMSelectors.recipeSearched.addEventListener("click", clickSearchRecipes)

// clears ingredient list
function clearButton(){
    DOMSelectors.currentIngredients.innerHTML = ""
    DOMSelectors.currentIngredients.innerHTML = "Ingredients Cleared" + ' ' + "(Press Add to Current Ingredients to Add More)"
}
DOMSelectors.clearIngredients.addEventListener("click", clearButton)


function clickChangeTheme() {

}

getData(URL)
// recipe card: "https://api.spoonacular.com/recipes/{id}/card"
// add food jokes
// add button for more information

// support screen readers and seo
// make button in ingredientcard results to add to list of ingredients for user
// take ingredient inputs from user and list down and search recipes that .includes the ingredients
// https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2
// https://spoonacular.com/food-api/docs#Get-Recipe-Card

// add filters

// "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar,&number=2?apiKey=489a1ecfaf764abdbc2e562b8f0b538a" // add &query=__&cuisine=__
// https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients


// https://api.spoonacular.com/recipes/idOfrecipe/information?apiKey=
