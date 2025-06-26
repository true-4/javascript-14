// Задачи на Promise.all

// ✅ Задача 1: Получить список пользователей и их TODO
// Условие:
//  Сделай два запроса:
// на https://jsonplaceholder.typicode.com/users
// на https://jsonplaceholder.typicode.com/todos
//  Выведи в консоль количество пользователей и количество задач, как один объект { usersCount, todosCount }, используя Promise.all.
Promise.all([ // запускает все запросы одновременно
  fetch('https://dummyjson.com/users').then(res => res.json()), // fetch возвращает промис, который после then превращается в массив данных
  fetch('https://dummyjson.com/todos').then(res => res.json())
]).then(([usersData, todosData]) => {
  const users = usersData.users;
  const todos = todosData.todos;
  const result = {
    usersCount: users.length,
    todosCount: todos.length
  };
  console.log(result);
})

// ✅ Задача 2: Проверка скорости API
// Условие:
//  Запусти одновременно три запроса на один и тот же URL https://jsonplaceholder.typicode.com/posts/{id} с разными id. Выведи в консоль общее время выполнения и массив постов.

