// Відправка GET-запиту на сервер для отримання списку завдань (todos)
function loadData() {
  fetch('http://localhost:3345/api/todos') // Використовуйте відповідний URL вашого сервера
    .then(response => response.json())
    .then(data => {
      // Обробка отриманих даних про завдання (todos)
      console.log('Отримані дані:', data);
      // Тут ви можете відобразити дані на сторінці або виконати інші дії з отриманими даними
    })
    .catch(error => console.error('Помилка отримання даних:', error));
}

// Відправка POST-запиту на сервер для збереження списку завдань (todos)
function saveData(data) {
  fetch('http://localhost:3345/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // Дані для збереження на сервері
  })
    .then(response => response.json())
    .then(result => {
      console.log('Результат збереження:', result);
      // Додаткові дії після успішного збереження на сервері
    })
    .catch(error => console.error('Помилка збереження:', error));
}

// Виклик функцій для отримання та збереження даних на сервері
loadData(); // Отримати дані від сервера при завантаженні сторінки

// Приклад даних про завдання (todos) для збереження на сервері
const sampleTodos = [
  { id: 1, text: 'Complete task 1', completed: false },
  { id: 2, text: 'Complete task 2', completed: true },
  { id: 3, text: 'Complete task 3', completed: false },
];

saveData(sampleTodos); // Зберегти дані на сервері (приклад)
