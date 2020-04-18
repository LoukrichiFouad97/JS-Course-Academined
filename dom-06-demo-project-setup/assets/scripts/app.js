// SELECTORS
const addModal = document.getElementById("add-modal");
const deleteModal = document.getElementById("delete-modal");
const confirmDelModal = deleteModal.querySelector(".btn--danger");
const cancelDelModal = deleteModal.querySelector(".btn--passive");
const addModalBtn = document.getElementById("btn-add");
const backDrop = document.getElementById("backdrop");
const modalCancel = addModal.querySelector(".btn--passive");
const modalAdd = modalCancel.nextElementSibling;
const movieInfo = addModal.querySelectorAll("input");
const entryText = document.getElementById("entry-text");
const movies = [];

// FUNCTIONS
const updateUI = () => {
	if (movies.length >= 0) {
		entryText.style.display = "none";
	}
};


const deleteMovie = (movie) => {
	deleteModal.classList.add("visible");
	confirmDelModal.addEventListener("click", () => {
		removeMovieHandler(movie);
		deleteModal.classList.remove("visible");
	});
	cancelDelModal.addEventListener("click", () => {
		deleteModal.classList.remove("visible");
	});
	
};

const removeMovieHandler = (movie) => {
	movie.parentElement.removeChild(movie);
};

// Add new Movie to the UI
const renderNewMovieElm = (title, imgURL, rating) => {
	const moviesList = document.getElementById("movie-list");
	const li = document.createElement("li");
	li.classList.add("movie-element");
	li.innerHTML = `
    <div class= "movie-element__image">
      <img src="${imgURL}" alt="${title}">
    </div>
    <div class= "movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 Stars</p>
    </div>
  `;
	moviesList.appendChild(li);
	li.addEventListener("click", deleteMovie.bind(this, li));
};

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
	cancelMovieHandler();
	clearMovieInfo();
	updateUI();
	renderNewMovieElm(
		addedMovie.movieTitle,
		addedMovie.movieImgUrl,
		addedMovie.movieRating
	);
};

// EVENTS
addModalBtn.addEventListener("click", toggleAddModal);
backDrop.addEventListener("click", cancelMovieHandler);
modalCancel.addEventListener("click", cancelMovieHandler);
modalAdd.addEventListener("click", addMovieHandler);
