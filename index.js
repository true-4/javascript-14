// Задачи на Promise.all

// ✅ Задача 1: Получить список пользователей и их TODO
// Условие:
//  Сделай два запроса:
// на https://jsonplaceholder.typicode.com/users
// на https://jsonplaceholder.typicode.com/todos
//  Выведи в консоль количество пользователей и количество задач, как один объект { usersCount, todosCount }, используя Promise.all.
Promise.all([ // запускает все запросы одновременно
  fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()), // fetch возвращает промис, который после then превращается в массив данных
  fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
]).then(([user, todos]) => { // получаем оба массива
  const result = {userId: user.length, todosId: todos.length,} // создаём объект с количеством каждого элемента
  console.log(result)
})
