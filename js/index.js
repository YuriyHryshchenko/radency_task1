import addNote from "./addNote/index.js";
import deleteNote from "./deleteNote/index.js";
import displayNotes from "./displayNotes/index.js";
import editNote from "./editNote/index.js";
import formSubmitted from "./editNote/index.js";
// import { formSubmitted } from "./editNote/index.js";

const notes = [
	{
		"id": 1690390282698,
		"name": "HELLO",
		"timeOfCreation": "July 26, 2023",
		"category": "Task",
		"content": "TEST",
		"date": [
			"12/07/2022",
			"15/08/2023"
		]
	}
]

// let noteId = editNote(notes);
editNote(notes);

// console.log(noteId);

displayNotes(notes);
deleteNote(notes);
addNote('form', '#note-name', '#note-category', '#note-content', '#note-date', notes);


