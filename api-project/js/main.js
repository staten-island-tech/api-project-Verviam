import '../styles/style.css';
import { DOMSelectors } from "./dom.js"

import AOS from "aos";
import "aos/dist/aos.css";


AOS.init(); // npm install aos --save


const URL = "https://api.spoonacular.com/food/ingredients/search?apiKey=f9fb379cedb74dcbb6c758ac6a3c7cef&query=apple"


async function getData(link) {
    try {
        const response = await fetch(link);

        if (response.status < 200 || response.status > 299) {
            throw new Error(response.statusText);
        } else {
            const data = await response.json();
            const results = data.results
            results.forEach(result => {
                DOMSelectors.ingredientCard.insertAdjacentHTML("beforeend",
                    `<div class = "card" data-aos="fade-right">
                <div class ="card-head" data-aos="flip-up">${result.name}</div>
                <img src = {"https://spoonacular.com/cdn/ingredients_100x100/" + ${result.image}} class = "card-img" alt="Picture of ${result.name}"/>
                <button type="submit" class="add-button" id="addIngred">Add To Current Ingredients</button> 
                `)
            })
        }
    }
    catch (error) {
        console.log(error)
    }
}

function searchIngredient(event) {
    event.preventDefault();
    const searchValue = DOMSelectors.ingredientSearched.value;
    DOMSelectors.ingredientCard.innerHTML = ""
    const newURL = URL.replace("query=apple", `query= + ${searchValue}`)
    getData(newURL)

}
DOMSelectors.submitButton.addEventListener("click", searchIngredient);

function clickAddToIngredients() {
    DOMSelectors.currentIngredients.innerHTML = ""
    DOMSelectors.currentIngredients.insertAdjacentHTML("afterend", result.name)
}
const addedIngredients = document.querySelectorAll(".add-button")
addedIngredients.addEventListener("click", clickAddToIngredients)
// code is in insertadjacenthtml so can't find??!!??!?!?!?!

// https://spoonacular.com/food-api/docs#Show-Images
//make button for more information about ingredient or recipe
//add alternative text for images + support screen readers + seo

function clickSearchRecipes() {
    const recipeURL = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=f9fb379cedb74dcbb6c758ac6a3c7cef&ingredients="
    const newRecipeURL = recipeURL.replace("ingredients=", `ingredients= + ${currentIngredients}put currentingredients into array and display`) 
    getData(newRecipeURL)
}
DOMSelectors.recipeSearched.addEventListener("click", clickSearchRecipes)

function clickChangeTheme() {

}

getData(URL)
// recipe card: "https://api.spoonacular.com/recipes/{id}/card"


// make image show
// make button in ingredientcard results to add to list of ingredients for user
// take ingredient inputs from user and list down and search recipes that .includes the ingredients
// https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2
// https://spoonacular.com/food-api/docs#Get-Recipe-Card

// add filters

// "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar,&number=2?apiKey=f9fb379cedb74dcbb6c758ac6a3c7cef" // add &query=__&cuisine=__
// https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients


// https://api.spoonacular.com/recipes/idOfrecipe/information?apiKey=
// findByingredients search
// search?query=
// https://www.youtube.com/watch?v=V20Mj4w-7K4

