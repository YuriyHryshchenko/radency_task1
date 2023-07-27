import displayNotes from "../displayNotes/index.js";
import displaySummaryTable from "../displaySummaryTable/index.js";

const editNote = (notes, archivedNotes) => {
	const form = document.querySelector('.edit-note-form');
	const name = document.querySelector('#edit-note-name');
	const category = document.querySelector('#edit-note-category');
	const content = document.querySelector('#edit-note-content');
	const date = document.querySelector('#edit-note-date');
	const noteContainer = document.querySelector('.notes-container');

	let index;
	noteContainer.addEventListener('click', e => {
		if(e.target.matches('.btn-primary') || e.target.matches('.edit-img')) {
			const row = e.target.closest('.row');
			const rowId = row.dataset.id;
			const noteIndex = notes.findIndex(item => item.id === +rowId);
	
			name.value = notes[noteIndex].name;
			category.value = notes[noteIndex].category;
			content.value = notes[noteIndex].content;
			index = noteIndex;
		}
	})

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const note = {
			...notes[index],
			name: name.value,
			category: category.value,
			content: content.value,
			date: [...notes[index].date, date.value]
		}

		notes.splice(index, 1, note);
		displayNotes('.notes-container', notes);
		displaySummaryTable(notes, archivedNotes);
		form.reset();
	})
}

export default editNote;