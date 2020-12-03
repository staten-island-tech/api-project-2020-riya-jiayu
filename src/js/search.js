import {DOMSelectors} from "./DOM";

//let pageNumber = 1;
//function for changed page?

const listen = async function () {
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
    const searchQuery = async function () {
      
      DOMSelectors.grid.innerHTML = "";
      let query =  `https://api.jikan.moe/v3/search/anime?q=${searchParams}&page=1&limit=40`;
      if (searchParams === "") {
        query = `https://api.jikan.moe/v3/search/anime?q=&page=1&sort=desc&order_by=members&limit=12`;
      }
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
                    <a  class="user-score" href="${anime.url}" target="_blank"> MyAnimeList</a>
                  </div>`

            );
        });    
    } catch (error) {
        console.log(error);
    }
};
searchQuery(pageNumber); 
    });
};

listen(); 

export {listen};