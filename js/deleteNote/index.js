import displayNotes from "../displayNotes/index.js";

const deleteNote = (notes) => {
	const noteContainer = document.querySelector('.notes-container');
	noteContainer.addEventListener('click', e => {
		if(e.target.matches('.btn-danger') || e.target.matches('.delete-img')) {
			const row = e.target.closest('.row');
			const rowId = row.dataset.id;
			notes.splice(notes.indexOf(notes.find(item => item.id === +rowId)), 1)
			displayNotes(notes);
		}
	})
}

export default deleteNote;