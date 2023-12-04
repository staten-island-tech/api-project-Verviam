// npm init vite@latest
// cd 
// npm install
// npm run dev
// get Lavian basketball data
//show latvian basketball data

function greet(name){
    const greetPromise = new Promise(function(resolve, reject){
        resolve(`Hello ${name}`)
    });
    return greetPromise
}
const Aaron = greet("aaron");
console.log(Aaron)
//handle promise
Aaron.then((result) => {
    console.log(result)
})

//REST API
const URL = "https://api.quotable.io/random";

async function getData(URL){
    try {
        const response = await fetch(URL) //
        if(response.status != 200){
            throw new Error(response.statusText) // or new Error(variable) to call in template literal
        }
        console.log(response)
        const data = await response.json         //
        console.log(data)//
        document.querySelector("h1").textContent= data.content
        document.querySelector("h2").textContent = data.author
    } catch (error) {
        document.querySelector("h1").textContent = error;
    }
}
getData(URL);

// support screen reader and seo