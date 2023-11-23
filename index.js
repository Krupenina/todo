document.addEventListener('DOMContentLoaded', function() {
  // Викликати loadData() після завантаження DOM
  loadData();

  // Реакція на клік по кнопці або будь-яку іншу подію
  const addTaskButton = document.getElementById('.app__button--create');
  addTaskButton.addEventListener('click', function() {
      // Якщо потрібно викликати saveData() після певної події
      // Тут можна викликати saveData() або виконати інші дії
  });
});

function loadData() {
  fetch('http://localhost:3345/api/todos') 
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log('Отримані дані:', data);
          // Тут можна виконати дії з отриманими даними, наприклад, відобразити на сторінці
      })
      .catch(error => console.error('Помилка отримання даних:', error));
}

function saveData(data) {
  fetch('http://localhost:3345/api/todos', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(result => {
          console.log('Результат збереження:', result);
          // Тут можна виконати додаткові дії після успішного збереження даних
      })
      .catch(error => console.error('Помилка збереження:', error));
}
