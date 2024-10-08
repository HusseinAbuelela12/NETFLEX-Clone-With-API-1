const apiKey ="api_key=a728e741b7f1a8ed298e979eeddb568e";
const baseUrl ="https://api.themoviedb.org/3" ;
const imgUrl = "https://image.tmdb.org/t/p/original";

const requests = {
    fetchTrending : `${baseUrl}/trending/all/week?${apiKey}&language=en-US`,
    fetchComedyMovie : `${baseUrl}/discover/movie?${apiKey}&with_genres=35`,
    fetchActionMovies : `${baseUrl}/discover/movie?${apiKey}&with_genres=28`,
    fetchHorrorMovies : `${baseUrl}/discover/movie?${apiKey}&with_genres=27`,
    fetchRomanceMovies : `${baseUrl}/discover/movie?${apiKey}&with_genres=10749`,
};
fetch(requests.fetchTrending)
.then((response)=>response.json())
.then((data)=>{
    // console.log(data);
    // console.log(data.results);
    let bannerMovie =data.results[Math.floor(Math.random()*data.results.length-1)];
    console.log(bannerMovie);
    document.getElementById("title").innerHTML= bannerMovie.name ? bannerMovie.name:bannerMovie.title;
    document.getElementById("desc").innerHTML= bannerMovie.overview.substr(0,50);
    document.getElementById("fsec").style.backgroundImage =`url(${imgUrl+bannerMovie.backdrop_path})`;
});


//////////////////////////////////////////////////////////////

fetch(requests.fetchComedyMovie)
.then((response)=>response.json())
.then((data)=>{
    // console.log(data.results);
    data.results.forEach((movie) => {
        const movieSlider = document.getElementById("comedyMovies");
        const div = document.createElement("div");
        div.classList.add("swiper-slide");
        movieSlider.appendChild(div);
        div.innerHTML = `
        <div class="datailsDiv">
            <img src=${imgUrl + movie.backdrop_path} alt="" >
            <div class="detailss">
                <div class="iconsdetail" >
                    <div>
                        <i class="fa-solid fa-play"></i>
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-thumbs-up"></i>
                        <i class="fa-solid fa-thumbs-down"></i>
                    </div>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
                <p>${movie.overview.substr(0, 40)}</p>
            </div>
        </div>
        `
    });
});


/////////////////////////////////////////////////////////////


fetch(requests.fetchActionMovies)
.then((response)=>response.json())
.then((data)=>{
    // console.log(data.results);
    data.results.forEach((movie) => {
        const movieSlider = document.getElementById("actionMovies");
        const div = document.createElement("div");
        div.classList.add("swiper-slide");
        movieSlider.appendChild(div);
        div.innerHTML = `
        <div class="datailsDiv">
            <img src=${imgUrl + movie.backdrop_path} alt="" >
            <div class="detailss">
                <div class="iconsdetail" >
                    <div>
                        <i class="fa-solid fa-play"></i>
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-thumbs-up"></i>
                        <i class="fa-solid fa-thumbs-down"></i>
                    </div>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
                <p>${movie.overview.substr(0, 40)}</p>
            </div>
        </div>
        `
    });
});


/////////////////////////////////////////////////////////////


fetch(requests.fetchHorrorMovies)
.then((response)=>response.json())
.then((data)=>{
    // console.log(data.results);
    data.results.forEach((movie) => {
        const movieSlider = document.getElementById("horrorMovies");
        const div = document.createElement("div");
        div.classList.add("swiper-slide");
        movieSlider.appendChild(div);
        div.innerHTML = `
        <div class="datailsDiv">
            <img src=${imgUrl + movie.backdrop_path} alt="" >
            <div class="detailss">
                <div class="iconsdetail" >
                    <div>
                        <i class="fa-solid fa-play"></i>
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-thumbs-up"></i>
                        <i class="fa-solid fa-thumbs-down"></i>
                    </div>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
                <p>${movie.overview.substr(0, 40)}</p>
            </div>
        </div>
        `
    });
});


/////////////////////////////////////////////////////////////


fetch(requests.fetchRomanceMovies)
.then((response)=>response.json())
.then((data)=>{
    // console.log(data.results);
    data.results.forEach((movie) => {
        const movieSlider = document.getElementById("romanceMovies");
        const div = document.createElement("div");
        div.classList.add("swiper-slide");
        movieSlider.appendChild(div);
        div.innerHTML = `
        <div class="datailsDiv">
            <img src=${imgUrl + movie.backdrop_path} alt="" >
            <div class="detailss">
                <div class="iconsdetail" >
                    <div>
                        <i class="fa-solid fa-play"></i>
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-thumbs-up"></i>
                        <i class="fa-solid fa-thumbs-down"></i>
                    </div>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
                <p>${movie.overview.substr(0, 40)}</p>
            </div>
        </div>
        `
    });
});

