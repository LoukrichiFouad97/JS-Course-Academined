// VARIABLES
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const movies = [];

// FUNCTIONS
const addMovieToPage = (filterWord = "") => {
	const movieList = document.getElementById("movie-list");
	if (movies.length === 0) {
		movieList.classList.remove("visible");
	} else {
		movieList.classList.add("visible");
	}
	movieList.innerHTML = "";
	const filteredMovie = !filterWord
		? movies
		: movies.filter((movie) => movie.info.movieTitle.includes(filterWord));
	filteredMovie.forEach((movie) => {
		const newMovie = document.createElement("li");

		// Object Destructuring
		const { info } = movie;
		let { getFormatedTitle } = movie;
		// getFormatedTitle = getFormatedTitle.bind(movie);

		let movieInfo = getFormatedTitle.call(movie) + " - ";
		for (const key in info) {
			if (key !== "movieTitle") {
				movieInfo += `${key}: ${info[key]}`;
			}
			newMovie.textContent = movieInfo;
			movieList.append(newMovie);
		}
	});
};

const addMovieHandler = () => {
	const movieTitle = document.getElementById("title").value;
	const extraName = document.getElementById("extra-name").value;
	const extraValue = document.getElementById("extra-value").value;
	if (
		movieTitle.trim() === "" ||
		extraName.trim() === "" ||
		extraValue.trim() === ""
	) {
		return;
	}
	const newMovie = {
		id: Math.random().toString(),
		info: {
			movieTitle,
			[extraName]: extraValue,
		},
		getFormatedTitle() {
			return this.info.movieTitle.toUpperCase();
		},
	};
	movies.push(newMovie);
	addMovieToPage();
};

const filterMoviesHandler = () => {
	const filterMovie = document.getElementById("filter-title").value;
	addMovieToPage(filterMovie);
};

// EVENTS
addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", filterMoviesHandler);
