import "../styles/style.css";
import { DOMSelectors } from "./dom.js";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init(); // npm install aos --save

const URL =
  "https://api.spoonacular.com/food/ingredients/search?apiKey=f9fb379cedb74dcbb6c758ac6a3c7cef&query=apple";
const ingredientArr = [];

// get data for ingredients and making variables for ingredient info
async function getDataIngred(url) {
  try {
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response.statusText);
    } else {
      const data = await response.json();
      const results = data.results;
      createCardI(results);
    }
  } catch (error) {
    console.log(error);
  }
}
function createCardI(data) {
  data.forEach((ingredient) => {
    DOMSelectors.ingredientCard.insertAdjacentHTML(
      "beforeend",
      `<div class = "card" data-aos="fade-right">
        <div class ="card-head" data-aos="flip-up">${ingredient.name}</div>
        <img src = "https://spoonacular.com/cdn/ingredients_250x250/${ingredient.image}" class = "card-img" alt="Picture of ${ingredient.name}"/>
        <button type="submit" class="add-button" id="addIngred">Add To Current Ingredients</button> 
        `
    );
  });

  const addedIngredients = document.querySelectorAll(".add-button");
  addedIngredients.forEach((addedIngredient) => {
    addedIngredient.addEventListener("click", addToIngredientsList);
  });
  // function for button that adds to ingredient list
  function addToIngredientsList() {
    const card = this.parentElement; //returns parent element where the specific button was located
    const ingredientName = card.querySelector(".card-head");
    const ingredientNameText = ingredientName.textContent;
    DOMSelectors.currentIngredients.insertAdjacentHTML(
      "beforeend",
      `<br> - ${ingredientNameText}`
    );
    const noSpacesIngredient = ingredientNameText.replace(/\s+/g, '-');
    ingredientArr.push(noSpacesIngredient);
  }
}

// get data for recipes and making variables for recipes info
async function getDataRecipe(url) {
  try {
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response.statusText);
    } else {
      const data = await response.json();
      createCardR(data);
    }
  } catch (error) {
    console.log(error);
  }
}
function createCardR(data) {
  //results.url
  DOMSelectors.ingredientCard.innerHTML = ""
  data.forEach((recipe) => {
    DOMSelectors.ingredientCard.insertAdjacentHTML(
      "beforeend",
      `<div class = "card" data-aos="fade-right">
        <div class ="card-head" data-aos="flip-up">${recipe.title}</div>
        <div class ="card-id" data-aos="flip-up">${recipe.id}</div>
        <img src = "${recipe.image}" class = "card-img" alt="Picture of ${recipe.title}"/>
        <button type="submit" class="get-recipe-card" id="getRecipeCard">Click for Recipe Card (click url after redirect)</button> 
        `
    ); 
  })
  const getRecipeCard = document.querySelectorAll(".get-recipe-card");
  getRecipeCard.forEach((button) => {
    button.addEventListener("click", openRecipeCard)}
)
// function for button that gets recipe card based on id of recipe
function openRecipeCard(){
  const card = this.parentElement
  const cardIDdiv = card.querySelector(".card-id")
  const cardID = cardIDdiv.textContent;
  const recipeCardURL = `https://api.spoonacular.com/recipes/${cardID}/card?apiKey=f9fb379cedb74dcbb6c758ac6a3c7cef`
  window.open(recipeCardURL, '_blank')
} 

}

// function for searching for ingredient
function searchIngredient(event) {
  event.preventDefault();
  const searchValue = DOMSelectors.ingredientSearched.value;
  DOMSelectors.ingredientCard.innerHTML = "";
  const newURL = URL.replace("query=apple", `query= + ${searchValue}`);
  getDataIngred(newURL);
}

// function for searching for recipes based on ingredient list 
function searchRecipes() {
  const apiKey = "f9fb379cedb74dcbb6c758ac6a3c7cef";
  const baseURL = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=";
  const query = "&ingredients=";
  let recipeURL = baseURL + apiKey + query
  for (let i = 0; i < ingredientArr.length; i++) {
  
    if ((i === 0)) {
      recipeURL += ingredientArr[i];
    } else {
      recipeURL += ",+" + ingredientArr[i];
    }
  }
  getDataRecipe(recipeURL);
}

// clears ingredient list
function clearButton() {
  DOMSelectors.currentIngredients.textContent = "";
}

function clickChangeTheme() {}


// button event listeners
DOMSelectors.submitButton.addEventListener("click", searchIngredient);
DOMSelectors.recipeSearched.addEventListener("click", searchRecipes);
DOMSelectors.clearIngredients.addEventListener("click", clearButton);

getDataIngred(URL);

// maybe fetch data for recipe card to display
// theme changer
// css + rubric requirements
