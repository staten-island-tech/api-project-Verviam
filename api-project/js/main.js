import '../styles/style.css';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init(); // npm install aos --save

const URL = "https://serpapi.com/search.json?q=?location=?engine=google&key=https://serpapi.com/manage-api-key=b58e348368dbc07d8245c2aafa4750df9263f46f502b219e6a798ad2a203e50c"

async function getData(URL) {
    try{
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);

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
// yt search api and google job api give yt vids based off job

//v2/pokemon?limit=151 (gets first 151 pokemons)
// &offset=151 (gets pokemone after 151)
//apikey?apikey=blahblah&page=2