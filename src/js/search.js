import {genres} from "./genres";
import {DOMSelectors} from "./DOM";



const listen = function(){
    DOMSelectors.searchArea.addEventListener("submit", function (e){
        e.preventDefault();
        //search
        const searchParams = DOMSelectors.searchArea.value;
        //async
        console.log(searchParams)
        const animeSearch = async function(){
            const requestUrl = `https://api.jikan.moe/v3/search/anime?q=${searchParams}`;
            console.log(requestUrl)

<<<<<<< HEAD
=======
            try{
                const response = await fetch(requestUrl);
                const data = await response.json()
>>>>>>> parent of 4cde130... idk
        data.results.forEach((anime) => {
            DOMSelectors.grid.insertAdjacentHTML(
                "beforeend",
                `<div class="anime-card">
                <div class="anime-card-front">
                  <img
                    src="${anime.image_url}"
                    alt=""
                    class="poster"
                  />
                </div>
                <div class="anime-card-back">
                  <h3 class="anime-card-header">${anime.title}</h3>
                  <div class="score-box">
                    <p class="user-score">Community Score</p>
                    <p class="user-score">${anime.score}</p>
                  </div>
        
                  <div class="release-box">
                    <p class="release-date">Released</p>
                    <p class="release-date">${anime.start_date}</p>
                  </div>

                  <div class="anime-types">
                    <p class="release-date">Episodes</p>
                    <p class="release-date">${anime.episodes}</p>
                  </div>
                  <div class="anime-genres">
                    <div>${genreArr}</div>
                  </div>
                </div>
              </div>`
            );
        });    
    } catch (error) {
        console.log(error);
    }
}
animeSearch(); 
            });
};

<<<<<<< HEAD
listen(); 
=======
listen(); 
/* 
document.getElementById("btn").onclick = () => {
    let query = document.getElementById('search_query').value;
    let requestUrl = `https://api.jikan.moe/v3/search/anime?q=${searchParams}`;
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => {
        // reset le contenu de la div
        // clear les recherches
        let results = document.getElementById("resultApi")
        results.innerHTML = ''
        data.results.forEach(item => {
          // pour chaque resultat va utiliser createElement
          let newDiv = document.createElement("div")
          // innerHTML remplace directement le contenu de newDiv
          newDiv.innerHTML = `
          <a href="${item.url}">
          '<h2>${item.title}</h2>'
          </a>`
  
          // ajout de l'image
          let newImage = document.createElement("img")
          newImage.src = item.image_url;
          newDiv.appendChild(newImage)
          // groupe toute la div, l'image et le lien vers le site pour les details
          results.appendChild(newDiv)
          
          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
                `<div class="anime-card">
                <div class="anime-card-front">
                  <img
                    src="https://api.jikan.moe/v3/anime/${anime.id}/pictures"
                    alt=""
                    class="poster"
                  />
                </div>
                <div class="anime-card-back">
                  <h3 class="anime-card-header">${anime.title}</h3>
                  <div class="score-box">
                    <p class="user-score">Community Score</p>
                    <p class="user-score">${anime.score}</p>
                  </div>
        
                  <div class="release-box">
                    <p class="release-date">Released</p>
                    <p class="release-date">${anime.start_date}</p>
                  </div>
        
                  <div class="anime-genres">
                    <div>${genreArr}</div>
                  </div>
                </div>
              </div>`
            );
          
        });
      });
  } */
>>>>>>> parent of 4cde130... idk
