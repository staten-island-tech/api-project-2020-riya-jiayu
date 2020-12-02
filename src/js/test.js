const { DOMSelectors } = require("./DOM.JS");

async function getId(){
    const response = await fetch("https://api.jikan.moe/v3/search/anime?q=&page=1&sort=desc&order_by=members&genre=1&genre=4")
    const anime = await response.json();

    console.log(anime);
    const root = document.DOMSelectors("#root");
    const ul = document.createElement("ul");

    anime.forEach(post => {
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.appendChild(document.createTextNode(anime.title));

    })
}

getId();