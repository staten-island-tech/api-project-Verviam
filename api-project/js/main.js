import '../styles/style.css';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init(); // npm install aos --save

const URL = "https://developers.google.com/custom-search/v1/overview"

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

// search up keywords and get websites related to keyword
// filter by criteria
// get pic of website home page for each card div
// yt search api and google job api give yt vids based off job