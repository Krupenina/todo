const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3345;

app.use(express.json());

// Маршрут для отримання списку задач (todos)
app.get('/api/todos', (req, res) => {
  try {
    const data = fs.readFileSync('data.json', 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: 'Could not retrieve todos' });
  }
});

// Маршрут для збереження списку задач (todos)
app.post('/api/todos', (req, res) => {
  const todos = req.body; // Припускається, що дані про задачі будуть надсилатися як JSON
  try {
    fs.writeFileSync('data.json', JSON.stringify(todos));
    res.status(200).json({ message: 'Todos saved successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Could not save todos' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
