const express = require('express'); 
const app = express();
const PORT = 3000;

app.use(express.json());

let todos = [];

// Health check
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
    const todo = req.body.todo;
    if (!todo) return res.status(400).send('Todo is required');
});

// Delete a todo
app.delete('/todos/:index', (req, res) => {
    const index = req.params.index;
    if (index < 0 || index > todos.length()) return res.status(404).send('Todo not found!');

    todos.splice(index, 1);
    res.send('Todo deleted!');
});

app.listen(PORT, () => {
    console.log(`Todo app listening on http://localhsot:${PORT}`);
});