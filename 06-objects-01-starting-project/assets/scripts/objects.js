// VARIABLES
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const movieList = document.getElementById("movie-list");
const movies = []


// FUNCTIONS
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
		id: Math.random(),
		info: {
			movieTitle,
			[extraName]: extraValue,
		},
  };
  movies.push(newMovie);
  console.log(movies);
};

// EVENTS
addMovieBtn.addEventListener("click", addMovieHandler);
