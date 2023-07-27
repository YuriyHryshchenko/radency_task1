import addNote from "./addNote/index.js";
import archiveNote from "./archiveNote/index.js";
import deleteNote from "./deleteNote/index.js";
import displayArchivedNotes from "./displayArchivedNotes/index.js";
import displayNotes from "./displayNotes/index.js";
import displaySummaryTable from "./displaySummaryTable/index.js";
import editNote from "./editNote/index.js";
import unarchiveNote from "./unarchiveNote/index.js";

const notes = [
	{
		"id": 1,
		"name": "HELLO1",
		"timeOfCreation": "July 26, 2023",
		"category": "Task",
		"content": "TEST1",
		"date": [
			"2022-07-13",
			"2023-08-15"
		]
	},
	{
		"id": 2,
		"name": "HELLO2",
		"timeOfCreation": "July 21, 2023",
		"category": "Random Thought",
		"content": "TEST2",
		"date": [
			"2022-07-17"
		]
	},
	{
		"id": 3,
		"name": "HELLO3",
		"timeOfCreation": "July 22, 2023",
		"category": "Idea",
		"content": "TEST3",
		"date": [
			"2022-07-14",
			"2023-08-16"
		]
	},
	{
		"id": 4,
		"name": "HELLO4",
		"timeOfCreation": "June 21, 2023",
		"category": "Task",
		"content": "TEST4",
		"date": [
			"2022-05-13",
			"2023-10-15"
		]
	},
	{
		"id": 5,
		"name": "HELLO5",
		"timeOfCreation": "June 19, 2023",
		"category": "Random Thought",
		"content": "TEST5",
		"date": [
			"2022-06-17"
		]
	},
	{
		"id": 6,
		"name": "HELLO6",
		"timeOfCreation": "June 10, 2023",
		"category": "Idea",
		"content": "TEST6",
		"date": [
			"2022-01-14",
			"2023-02-16"
		]
	},
	{
		"id": 7,
		"name": "HELLO7",
		"timeOfCreation": "October 7, 2023",
		"category": "Idea",
		"content": "TEST7",
		"date": [
			"2000-10-07",
		]
	}
]
const archivedNotes = [

]


unarchiveNote(notes, archivedNotes);
displayArchivedNotes(archivedNotes);
editNote(notes, archivedNotes);
archiveNote(notes, archivedNotes);
displayNotes('.notes-container', notes);
deleteNote(notes, archivedNotes);
displaySummaryTable(notes, archivedNotes);

addNote('form', '#note-name', '#note-category', '#note-content', '#note-date', notes, archivedNotes);


