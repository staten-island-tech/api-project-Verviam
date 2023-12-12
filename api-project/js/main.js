import '../styles/style.css';

import AOS from "aos";
import "aos/dist/aos.css";


AOS.init(); // npm install aos --save


const URL = "https://api.spoonacular.com/food/ingredients/9266/information?apiKey=f9fb379cedb74dcbb6c758ac6a3c7cef&includeNutrition=true"
// search?query=
// https://www.youtube.com/watch?v=V20Mj4w-7K4
async function getData(URL) {
    try{
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        data.forEach(card => {
            
        });

    }
    catch (error) {
        console.log("error")
    }
}

getData(URL)

// https://medium.com/@luisprooc/free-awesome-apis-for-your-next-projects-9a31345cb114
// https://rapidapi.com/guides/ten-api-projects
// https://apilist.fun/api/google-custom-search-api

// search up keywords and get websites related to keyword
// filter by criteria
// get pic of website home page for each card div
// food recipe builder (have stats of certain foods and recipes, have another api for pics for final recipe)
// maybe too lazy to cook option and then find restaurants with those specific foods in their menus (https://rapidapi.com/ptwebsolution/api/restaurants222/details)
// combine with weather api or local restaurants api

// random dad jokes just for viewer attention span https://apilist.fun/api/icanhazdadjoke

//v2/pokemon?limit=151 (gets first 151 pokemons)
// &offset=151 (gets pokemone after 151)
//apikey?apikey=blahblah&page=2