

// Function to send a request to create a new message
function createMessage(message) {
    fetch('/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    }).then(() => loadMessages()); // Load messages after creating
}

// Function to load all messages
function loadMessages() {
    fetch('/read')
        .then(response => response.json())
        .then(data => {
            const messageBoard = document.getElementById('messageBoard');
            messageBoard.innerHTML = data.messages.map((msg, index) => `<div>${index}: ${msg}</div>`).join('');
        });
}

// Function to send a request to update a message
function updateMessage(id, newMessage) {
    fetch('/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, message: newMessage })
    }).then(() => loadMessages()); // Load messages after updating
}

// Function to send a request to delete a message
function deleteMessage(id) {
    fetch('/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    }).then(() => loadMessages()); // Load messages after deleting
}

// Event listeners for buttons
document.getElementById('createButton').addEventListener('click', () => {
    const messageInput = document.getElementById('createInput');
    createMessage(messageInput.value);
    messageInput.value = '';
});

document.getElementById('updateButton').addEventListener('click', () => {
    const idInput = document.getElementById('updateIdInput');
    const textInput = document.getElementById('updateTextInput');
    updateMessage(parseInt(idInput.value), textInput.value);
    idInput.value = '';
    textInput.value = '';
});

document.getElementById('deleteButton').addEventListener('click', () => {
    const idInput = document.getElementById('deleteIdInput');
    deleteMessage(parseInt(idInput.value));
    idInput.value = '';
});
