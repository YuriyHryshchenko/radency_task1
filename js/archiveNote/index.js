
import displayNotes from "../displayNotes/index.js";
import displaySummaryTable from "../displaySummaryTable/index.js";
const archiveNote = (notes, archivedNotes) => {
	const noteContainer = document.querySelector('.notes-container');
	noteContainer.addEventListener('click', e => {
		if(e.target.matches('.btn-success') || e.target.matches('.archive-img')) {
			const row = e.target.closest('.row');
			const rowId = row.dataset.id;
			const noteIndex = notes.findIndex(item => item.id === +rowId);
			archivedNotes.push(notes[noteIndex])
			notes.splice(noteIndex, 1)
			displayNotes('.notes-container', notes);
			displayNotes('.archived-notes-container', archivedNotes, true);
			displaySummaryTable(notes, archivedNotes);
		}
	})
}

export default archiveNote;