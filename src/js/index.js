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
const key = `81e21e5440msh0b93b8e3b7cb749p116c5bjsnf5acd0869f72`;
const query = `https://api.jikan.moe/v3`;
    try {
        const response = await fetch(query);
        const data = await response.json()
        data.results.forEach((movie) => {
            
            let genreArr = [];
            const genreIds = function(){
                genres.forEach((element) =>{
                if (movie.genre_ids.includes(element.id)) {
                    genreArr.push(element.name);
                    return genres;
                }
            });
            
            };
            genreIds();
            DOMSelectors.grid.insertAdjacentHTML(
                "beforeend",
                `<div class="movie-card">
                <div class="movie-card-front">
                  <img
                    src="https://image.tmdb.org/t/p/w300/${movie.poster_path}"
                    alt=""
                    class="poster"
                  />
                </div>
                <div class="movie-card-back">
                  <h3 class="movie-card-header">${movie.original_title}</h3>
                  <div class="score-box">
                    <p class="user-score">Community Score</p>
                    <p class="user-score">${movie.vote_average}</p>
                  </div>
        
                  <div class="release-box">
                    <p class="release-date">Released</p>
                    <p class="release-date">${movie.release_date}</p>
                  </div>
        
                  <div class="movie-genres">
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

init();