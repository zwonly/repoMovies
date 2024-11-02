const apiKey = 'cb9de0c4'; 
const baseUrl = `http://www.omdbapi.com/?apikey=${apiKey}`;

    async function searchMovie() {
    const query = document.getElementById('movieInput').value;
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = ''; 

    try {
        const response = await fetch(`${baseUrl}&s=${query}`);
        const data = await response.json();
        
        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            movieList.innerHTML = `<p>${data.Error}</p>`;
        }
    } catch (error) {
        movieList.innerHTML = `<p>Something went wrong. Try again later.</p>`;
    }
}
function displayMovies(movies) {
    const movieList = document.getElementById('movieList');   
    movies.map(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <p>${movie.Type}</p>

        `;
        movieList.appendChild(movieDiv);
    });
}