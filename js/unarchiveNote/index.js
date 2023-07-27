
import displayNotes from "../displayNotes/index.js";
import displaySummaryTable from "../displaySummaryTable/index.js";

const unarchiveNote = (notes, archivedNotes) => {
	const noteContainer = document.querySelector('.archived-notes-container');
	noteContainer.addEventListener('click', e => {
		if(e.target.matches('.btn-danger') || e.target.matches('.archive-img')) {
			const row = e.target.closest('.row');
			const rowId = row.dataset.id;
			const noteIndex = archivedNotes.findIndex(item => item.id === +rowId);
			notes.push(archivedNotes[noteIndex]);
			archivedNotes.splice(noteIndex, 1);
			displayNotes('.notes-container', notes);
			displayNotes('.archived-notes-container', archivedNotes, true);
			displaySummaryTable(notes, archivedNotes);
		}
	})
}

export default unarchiveNote;