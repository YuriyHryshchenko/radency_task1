import addNote from "./addNote/index.js";
import deleteNote from "./deleteNote/index.js";
import displayNotes from "./displayNotes/index.js";


const notes = [
	{
		"id": 1690390282698,
		"name": "",
		"timeOfCreation": "July 26, 2023",
		"category": "Task",
		"content": "",
		"date": [
			""
		]
	}
]

displayNotes(notes);
deleteNote(notes);
addNote('form', '#note-name', '#note-category', '#note-content', '#note-date', notes);


