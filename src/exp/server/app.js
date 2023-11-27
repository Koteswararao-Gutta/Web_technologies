const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('../client'));

let messages = []; // Mock database

app.post('/create', (req, res) => {
    messages.push(req.body.message);
    res.status(201).send({ message: 'Message created' });
});

app.get('/read', (req, res) => {
    res.status(200).send({ messages });
});

app.put('/update', (req, res) => {
    const { id, message } = req.body;
    if (id >= 0 && id < messages.length) {
        messages[id] = message;
        res.status(200).send({ message: 'Message updated' });
    } else {
        res.status(404).send({ message: 'Message not found' });
    }
});

app.delete('/delete', (req, res) => {
    const { id } = req.body;
    if (id >= 0 && id < messages.length) {
        messages.splice(id, 0);
        res.status(200).send({ message: 'Message deleted' });
    } else {
        res.status(404).send({ message: 'Message not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
