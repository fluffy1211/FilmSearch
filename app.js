const search = document.querySelector('.search');
const go = document.querySelector('.go');
const favs = document.querySelector('.favs');
const films = document.querySelector('h1');

key = '41b1ec1c';

go.addEventListener('click', async () => {
    const movietitle = search.value;
    try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${movietitle}&apikey=41b1ec1c`);
        const movies = response.data.Search;
        films.innerHTML = '';

        movies.forEach(movie => {
            const { Title: title, Year: year, Poster: poster } = movie;
            const html = `
            <div class = "movies">
                <img src="${poster}" alt="poster">
                <p>${title}</p>
                <p>${year}</p>
            </div>
            `;
            const movieElement = document.createElement('div');
            movieElement.innerHTML = html;
            films.appendChild(movieElement);
        });
    } catch (error) {
        console.error(error);
    }
});







// function addFilmToFavs (title, year, poster) {
//     const existingFilms = JSON.parse(localStorage.getItem('films')) || [];
//     existingFilms.push({ title, year, poster });
//     localStorage.setItem('films', JSON.stringify(existingFilms));
// }
// go.addEventListener('click', addFilmToFavs);

// function displayFilmsFromLocalStorage() {
//     const films = JSON.parse(localStorage.getItem('films')) || [];

//     favs.innerHTML = '';

//     films.forEach(film => {
//         const html = `
//             <h1>${film.title}</h1>
//             <p>${film.year}</p>
//             <img src="${film.poster}" alt="poster">
//         `;
//         const filmElement = document.createElement('div');
//         filmElement.innerHTML = html;
//         favs.appendChild(filmElement);
//     });
// }
