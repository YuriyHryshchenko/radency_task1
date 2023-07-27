
const displaySummaryTable = (notes, archivedNotes) => {
	const summaryActiveTask = document.querySelector('.summary-task-active'),
			summaryArchivedTask = document.querySelector('.summary-task-archived'),
			summaryActiveIdea = document.querySelector('.summary-idea-active'),
			summaryArchivedIdea = document.querySelector('.summary-idea-archived'),
			summaryActiveThought = document.querySelector('.summary-thought-active'),
			summaryArchivedThought = document.querySelector('.summary-thought-archived');

	if(notes || archivedNotes) {
		const sumOfActiveTasks = countSumOfSpecifiedNotes(notes, 'Task');

		const sumOfActiveIdeas = countSumOfSpecifiedNotes(notes, 'Idea');

		const sumOfActiveRandomThoughts = countSumOfSpecifiedNotes(notes, 'Random Thought');

		const sumOfArchivedTasks = countSumOfSpecifiedNotes(archivedNotes, 'Task');

		const sumOfArchivedIdeas = countSumOfSpecifiedNotes(archivedNotes, 'Idea');

		const sumOfArchivedRandomThoughts = countSumOfSpecifiedNotes(archivedNotes, 'Random Thought');

		summaryActiveTask.textContent = sumOfActiveTasks;
		summaryArchivedTask.textContent = sumOfArchivedTasks;
		summaryActiveIdea.textContent = sumOfActiveIdeas;
		summaryArchivedIdea.textContent = sumOfArchivedIdeas;
		summaryActiveThought.textContent = sumOfActiveRandomThoughts;
		summaryArchivedThought.textContent = sumOfArchivedRandomThoughts;
	}
}

const countSumOfSpecifiedNotes = (notes, category) => {
	return notes.reduce((sum, curr) => {
		if(curr.category === category) {
			sum +=1;
		}
		return sum;
	}, 0)
}



export default displaySummaryTable;