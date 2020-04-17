// SELECTORS
const addModal = document.getElementById("add-modal");
const addModalBtn = document.getElementById("btn-add");
const backDrop = document.getElementById("backdrop");
const modalCancel = addModal.querySelector(".btn--passive");
const modalAdd = modalCancel.nextElementSibling;
const movieInfo = addModal.querySelectorAll("input");
const movies = [];
const entryText = document.getElementById("entry-text");
const moviesList = document.getElementById("movie-list");
const movie = document.createElement("li");

// FUNCTIONS
const updateUI = () => {
	if (movies.length >= 0) {
		entryText.style.display = "none";
	}
};

const 

const toggleBackDrop = () => {
	backDrop.classList.toggle("visible");
};

const toggleAddModal = () => {
	addModal.classList.toggle("visible");
	toggleBackDrop();
};

// Clear Movie Info
const clearMovieInfo = () => {
	for (const input of movieInfo) {
		input.value = "";
	}
};

// Cancel adding movie
const cancelMovieHandler = () => {
	toggleAddModal();
	clearMovieInfo();
};

// Confirm Adding movie
const addMovieHandler = () => {
	const movieTitle = movieInfo[0].value;
	const movieImgUrl = movieInfo[1].value;
	const movieRating = movieInfo[2].value;

	if (
		movieTitle.trim() === "" ||
		movieImgUrl.trim() === "" ||
		movieRating.trim() === "" ||
		+movieRating.trim() < 1 ||
		+movieRating.trim() > 5
	) {
		alert("Invalide Values! try again");
		return;
	}

	const addedMovie = {
		movieTitle: movieTitle,
		movieImgUrl: movieImgUrl,
		movieRating: movieRating,
	};
	// store movies
	movies.push(addedMovie);
	// console.log(movies);
	cancelMovieHandler();
	clearMovieInfo();
	updateUI();
};

// EVENTS
addModalBtn.addEventListener("click", toggleAddModal);
backDrop.addEventListener("click", cancelMovieHandler);
modalCancel.addEventListener("click", cancelMovieHandler);
modalAdd.addEventListener("click", addMovieHandler);
