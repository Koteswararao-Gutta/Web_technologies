document.addEventListener('DOMContentLoaded', function () {
  const clickMeButton = document.getElementById('click-me');
  const outputParagraph = document.getElementById('output');
  const noteForm = document.getElementById('note-form');
  const noteContent = document.getElementById('note-content');
  const notesList = document.getElementById('notes-list');



  noteForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const content = noteContent.value.trim();
    if (content !== '') {
      addNoteToList(content);
      noteContent.value = '';
    }
  });

  function addNoteToList(content) {
    const li = document.createElement('li');
    li.textContent = content;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');

    deleteButton.addEventListener('click', function () {
      li.remove();
    });

    li.appendChild(deleteButton);
    notesList.appendChild(li);
  }
});
