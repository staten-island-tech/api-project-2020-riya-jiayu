import {genres} from "./genre";
import {DOMSelectors} from "./DOM";



const listen = function(){
    DOMSelectors.searchForm.addEventListener("submit", function (e){
        e.preventDefault();
        //search
        const searchParams = DOMSelectors.searchArea.value;
        //async
        const animeSearch = async function(){

        }

    });

};

listen();