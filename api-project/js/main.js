import '../styles/style.css';

import AOS from "aos";
import "aos/dist/aos.css";


AOS.init(); // npm install aos --save


const URL = "https://api.spoonacular.com/food/ingredients/search?apiKey=f9fb379cedb74dcbb6c758ac6a3c7cef&query=apple"
// "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar,&number=2?apiKey=f9fb379cedb74dcbb6c758ac6a3c7cef" // add &query=__&cuisine=__
// https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients


// https://api.spoonacular.com/recipes/idOfrecipe/information?apiKey=       // get ingredient info based on recipe
// findByingredients search
// search?query=
// https://www.youtube.com/watch?v=V20Mj4w-7K4
async function getData(URL) {
    try{
        const response = await fetch(URL);
        const data = await response.json();
        const results = data.results
        results.forEach(ingredient => {
            console.log(ingredient.name)
        });

        DOMException.ingredientCard.insertAdjacentHTML()

    }
    catch (error) {
        console.log(error)
    }
}

getData(URL)

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

// take ingredient inputs from user and list down and search recipes that .includes the ingredients 
// https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2


// take ingredients of food and allow users to search and click to add to list of ingredients html text and sort based on searching and have card divs for ingreds
// with ingredients, add find recipes button that finds recipes that includes ingredients and make cards for it

//v2/pokemon?limit=151 (gets first 151 pokemons)
// &offset=151 (gets pokemone after 151)
//apikey?apikey=blahblah&page=2