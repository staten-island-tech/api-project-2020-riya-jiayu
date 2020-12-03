import {genres} from "./genres";
import {DOMSelectors} from "./DOM";

//update variable for page
/*let pageNumber = 1;
//next function updates variable and passes into query
const nextPage = function(){
    DOMSelectors.btnNext.addEventListener("click", function(){
        pageNumber++;
        init(pageNumber);
    });
};
nextPage();*/

const init = async function (pageNumber){
  const DOMSelectors = {
  }
const query = `https://api.jikan.moe/v3/search/anime?q=&page=1&sort=desc&order_by=members`;
    try {
        const response = await fetch(query);
        const data = await response.json()
        data.results.forEach((anime) => {
            
            /* let genreArr = [];
            const genreIds = function(){
                genres.forEach((element) =>{
                if (anime.genres_id.includes(element.id)) {
                    genreArr.push(element.name);
                    return genres;
                }
            });
            
            };
            genreIds();  */
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
                    <p class="synopsis">${anime.synopsis}</p>
                  </div>`
            );
        });    
    } catch (error) {
        console.log(error);
    }
};

<<<<<<< HEAD
init(pageNumber);
=======
//const search = `https://api.jikan.moe/v3/search/anime?q=&page=1&genre=${genreId}&order_by=members&sort=desc`;
init();
>>>>>>> parent of 4cde130... idk
