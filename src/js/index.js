//
import {DOMSelectors} from "./DOM";

//update variable for page
let pageNumber = 1;
//next function updates variable and passes into query
const nextPage = function(){
    DOMSelectors.btnNext.addEventListener("click", function(){
        pageNumber++;
        init(pageNumber);
    });
};

nextPage();

const init = async function(pageNumber){
  const DOMSelectors = {
};
let id = []
let request = []
const query = `https://jikan.moe/v3/anime/${id}/${request}/${parameter}`;
    try {
        const response = await fetch(query);
        const data = await response.json()
        data.results.forEach((anime) => {
            
            let genreArr = [];
            const genreIds = function(){
                genres.forEach((element) =>{
                if (anime.genre_ids.includes(element.id)) {
                    genreArr.push(element.name);
                    return genres;
                }
            });
            
            };
            genreIds();
            DOMSelectors.grid.insertAdjacentHTML(
                "beforeend",
                `<div class="anime-card">
                <div class="anime-card-front">
                  <img
                    src="https://image.tmdb.org/t/p/w300/${anime.poster_path}"
                    alt=""
                    class="poster"
                  />
                </div>
                <div class="anime-card-back">
                  <h3 class="anime-card-header">${anime.original_title}</h3>
                  <div class="score-box">
                    <p class="user-score">Community Score</p>
                    <p class="user-score">${anime.vote_average}</p>
                  </div>
        
                  <div class="release-box">
                    <p class="release-date">Released</p>
                    <p class="release-date">${anime.release_date}</p>
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
};

const search = `https://api.jikan.moe/v3/search/anime?q=&page=1&genre=${genreId}&order_by=members&sort=desc`;
init();