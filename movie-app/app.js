// const APIKEY = "04c35731a5ee918f014970082a0088b1";

// TMDb api
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const container = document.querySelector(".movie-container");
const form = document.getElementById("form");
const search = document.getElementById("movie-search");
const searchBtn = document.getElementById("search");

async function getMovies(url) {

    const resp = await fetch(url);
    const respData = await resp.json();

    // console.log(respData);
    addMovies(respData);

    return respData.total_pages
}

function addMovies(data) {

    console.log(data)

    document.querySelector(".count").innerText = `Showing ${data.results.length} movie(s)`;

    //clear movie container
    container.innerHTML = "";

    data.results.forEach((movie) => {

        const div = document.createElement("div");
        div.classList.add("movie-tiles");
        div.innerHTML = `
            <img
            src="${IMGPATH + movie.poster_path}"
            alt="${movie.title}"
            />
            <div class="info">
                <h4>${movie.original_title}</h4>
                <span class="${getClassByRating(movie.vote_average)}">${movie.vote_average}</span>
            </div>
            <div class="overview">
                <h4>Overview:</h4><br>
                <p>${movie.overview}</p><br>
                <span>Release Date: ${formatDate(movie.release_date)}<span>
            </div>
        `;

        container.appendChild(div);

    });

}

function formatDate(unformatted_date) {


    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        
    if(unformatted_date){
        const date = unformatted_date.split("-");
        date[1] = Number(date[1]);
        const formatted_date = date[2]+" "+month[date[1]]+" "+date[0];

        return formatted_date;
    }
    return "NA";
}

function getClassByRating(vote){

    if (vote >= 8){
        return "green";
    }else if (vote >= 5){
        return "orange";
    }else{
        return "red";
    }
}

form.addEventListener('submit',(e) => {

    e.preventDefault();
    const searchValue = search.value;
    
    if(searchValue){

        getMovies(SEARCHAPI+searchValue);

        search.value = "";
    }

});

searchBtn.addEventListener('click',() => {

    const searchValue = search.value;
    
    if(searchValue){

        getMovies(SEARCHAPI+searchValue);

        search.value = "";
    }

});

// pagination
const ul = document.querySelector("ul");

function paginate(page = 1) {
    
    let TP = getMovies(APIURL+page).then(totalPages => {
        
        // console.log(totalPages)
    
        let li = "";
        let activeLi = "";
        let beforePage = page - 2;
        let afterPage = page + 2;

        if (page > 2){

            li += `<li class="prev" onclick="paginate(${page - 1})"><span>prev</span></li>`;
        }

        if (page > 3){

            li += `<li class="num" onclick="paginate(1)"><span>1</span></li>`;
            if (page > 4){
                li += `<li class="dots"><span>...</span></li>`;
            }
        }

        for (let pageNo = beforePage; pageNo <= afterPage; pageNo++){

            if(pageNo > totalPages){
                continue;
            }

            if (pageNo < 1){
                pageNo = 1;
            }

            if (page == pageNo){
                activeLi = "active";
            }else{
                activeLi = "";
            }
            li += `<li class="num ${activeLi}" onclick="paginate(${pageNo})"><span>${pageNo}</span></li>`
        }

        if ( page < totalPages - 2){

            if (page < totalPages - 3){
                li += `<li class="dots"><span>...</span></li>`;
            }
            li += `<li class="num" onclick="paginate(${totalPages})"><span>${totalPages}</span></li>`;
        }

        if (page < totalPages) {

            li += `<li class="next" onclick="paginate(${page + 1})"><span>next</span></li>`;
        }

        ul.innerHTML = li;

    });

}

paginate();