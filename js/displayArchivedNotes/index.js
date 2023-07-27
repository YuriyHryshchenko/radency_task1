import displayNotes from "../displayNotes/index.js";


const displayArchivedNotes = (archivedNotes) => {
	const archiveHeaderButton = document.querySelector('.archive-header-button');
	const noteHeaderContainer = document.querySelector('.archive-notes-header');
	const noteContainer = document.querySelector('.archived-notes-container');
	archiveHeaderButton.addEventListener('click', (e) => {
		noteHeaderContainer.classList.toggle('d-none');
		noteContainer.classList.toggle('d-none');

		noteHeaderContainer.classList.toggle('d-block');
		noteContainer.classList.toggle('d-block');
		
		displayNotes('.archived-notes-container', archivedNotes, true)
	});
}

export default displayArchivedNotes;