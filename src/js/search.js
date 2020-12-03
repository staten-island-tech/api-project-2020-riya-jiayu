import {genres} from "./genres";
import {DOMSelectors} from "./DOM";

let pageNumber = 1;
//function for changed page?

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    const nextPage = function () {
      //next.addeventlistener
      DOMSelectors.btnNext.addEventListener("click", function () {
        //update page variable
        pageNumber++;
        //re-run query()
        searchQuery(pageNumber);
      });
    };
    const previousPage = function () {
      //next.addeventlistener
      DOMSelectors.btnPrev.addEventListener("click", function () {
        //update page variable
        pageNumber--;
        //re-run query()
        searchQuery(pageNumber);
      });
    };
    previousPage();
    nextPage();
    e.preventDefault();

    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function (pageNumber) {
      console.log(pageNumber);
      DOMSelectors.grid.innerHTML = "";
      const query =  `https://api.jikan.moe/v3/search/anime?q=${searchParams}&page=${pageNumber}`;
      try {
        const response = await fetch(query);
        const data = await response.json();

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
                    <p class="synopsis">${anime.synopsis}</p>
                  </div>`

            );
        });    
    } catch (error) {
        console.log(error);
    }
};
searchQuery(); 
    });
};

listen(); 