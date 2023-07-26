
import deleteNote from "../deleteNote/index.js";
import displayNotes from "../displayNotes/index.js";

const addNote = (formSelector, nameSelector, taskSelector, contentSelector, dateSelector, notes) => {
	const form = document.querySelector(formSelector);

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const name = document.querySelector(nameSelector).value;
		const category = document.querySelector(taskSelector).value;
		const content = document.querySelector(contentSelector).value;
		const date = document.querySelector(dateSelector).value;

	
		const timeOfCreation = new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
		
		const note = {
			id: Date.now(),
			name, 
			timeOfCreation, 
			category,
			content,
			date: [date]
		};

		notes.push(note);
		displayNotes(notes);
		form.reset();
	})
}

export default addNote;