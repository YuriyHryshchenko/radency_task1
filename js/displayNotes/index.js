const displayNotes = (notes) => {
	const notesContainer = document.querySelector('.notes-container');
	notesContainer.innerHTML = '';
	for(const note of notes) {
		const row = document.createElement('div');
		row.classList.add('row', 'py-3', 'border-top', 'border-warning');
		row.setAttribute('data-id', note.id);
	
		for(const key in note) {
			if(key === 'id') {
				continue;
			}
			const col = document.createElement('div');
			col.classList.add('col', 'border-end', 'border-warning');
			col.textContent = note[key];
			row.appendChild(col);
		}	

		const col = document.createElement('div');
		col.classList.add('col');

		addButton('btn-primary', '../../img/edit.svg', 'Edit Icon', col);
		addButton('btn-success', '../../img/archive.svg', 'Archive Icon', col);
		addButton('btn-danger', '../../img/delete.svg', 'Delete Icon', col);

		row.appendChild(col);

		notesContainer.appendChild(row);
	}
}

function addButton(btnClass, imgSrc, imgAlt, col){
	const button = document.createElement('button');
	button.type = 'button';

	button.classList.add('btn', 'me-1', btnClass);

	const img = document.createElement('img');
	img.classList.add('delete-img');
	img.src = imgSrc;
	img.alt = imgAlt;

	button.appendChild(img);
	
	col.appendChild(button)
}

export default displayNotes;