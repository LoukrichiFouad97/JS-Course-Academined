// Selectors
const addModal = document.getElementById("add-modal");
const addModalBtn = document.getElementById("btn-add");
const backDrop = document.getElementById("backdrop");
const modalCancel = addModal.querySelector(".btn--passive");
const modalAdd = modalCancel.nextElementSibling;


// Functions
const toggleBackDrop = () => {
	backDrop.classList.toggle("visible");
};

const toggleAddModal = () => {
	addModal.classList.toggle("visible");
	toggleBackDrop();
};

const cancelMovieHandler = () => {
	toggleAddModal();
};

const addMovieHandler = () => {

}

// Events
addModalBtn.addEventListener("click", toggleAddModal);
backDrop.addEventListener("click", cancelMovieHandler);
modalCancel.addEventListener("click", cancelMovieHandler);
modalAdd.addEventListener('click', addMovieHandler)