import '../styles/style.css';
import { DOMSelectors } from "./dom.js"

import AOS from "aos";
import "aos/dist/aos.css";


AOS.init(); // npm install aos --save


const URL = "https://api.spoonacular.com/food/ingredients/search?apiKey=f9fb379cedb74dcbb6c758ac6a3c7cef&query=apple"


async function getData(URL) {
    try{
        const response = await fetch(URL);
        const data = await response.json();
        const results = data.results

        results.forEach(result => {
            DOMSelectors.ingredientCard.insertAdjacentHTML("beforeend", 
            `<div class = "card" data-aos="fade-right">
            <div class ="card-head" data-aos="flip-up">${result.name}</div>
            <img src = {"https://spoonacular.com/cdn/ingredients_100x100/" + ${result.image}} class = "card-img" alt="Picture of ${result.name}"/>
            <button type="submit" class="add-button" id="addIngred">Add To Current Ingredients</button> 
            `) // https://spoonacular.com/food-api/docs#Show-Images
            //make button to add to a diff list by taking result.name and inserting somewhere
            //make button for more information about ingredient or recipe
            //add alternative text for images + support screen readers

        })
        
    }
    catch (error) {
        console.log(error)
    }
}

getData(URL)

// make image show
// be able to change url query based on user input
// make button in ingredientcard results to add to list of ingredients for user 
// take ingredient inputs from user and list down and search recipes that .includes the ingredients 
// https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2

// take ingredients of food and allow users to search and click to add to list of ingredients html text and sort based on searching and have card divs for ingreds
// with ingredients, add find recipes button that finds recipes that includes ingredients and make cards for it
// add filters

// "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar,&number=2?apiKey=f9fb379cedb74dcbb6c758ac6a3c7cef" // add &query=__&cuisine=__
// https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients


// https://api.spoonacular.com/recipes/idOfrecipe/information?apiKey=       
// findByingredients search
// search?query=
// https://www.youtube.com/watch?v=V20Mj4w-7K4


function createIngredCard(){
    // for each ingredient result from search
    DOMSelectors.ingredientCard.insertAdjacentHTML()
}



// function greet(name){
//     const greetPromise = new Promise(function(resolve, reject){
//         resolve(`Hello ${name}`)
//     });
//     return greetPromise
// }
// const randomName = greet("randNam");

// randomName.then((result)=>{
//     console.log(result)
// })

