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
}).catch(e => console.error('Ошибка', e))

// ✅ Задача 2: Проверка скорости API
// Условие:
//  Запусти одновременно три запроса на один и тот же URL https://jsonplaceholder.typicode.com/posts/{id} с разными id. Выведи в консоль общее время выполнения и массив постов.

// КОД ВРОДЕ РАБОТАЕТ, НО НЕ МОГУ НАЙТИ НОРМАЛЮНУЮ URLку
// const idCounts = [1, 2, 3] // идентификаторы для каждого запроса (повторяющегося)
// const startTimer = performance.now() // запуск таймера 1
// const controls = (id) => { // функция для получения id
//   const urlAddress = `https://jsonplaceholder.typicode.com/comments/${id}` // присваиваем переменной адрес передавая id
//   return fetch(urlAddress).then(res => res.json()) // возвращаем промис с данными
// }

// Promise.all(idCounts.map(item => controls(item))).then(result => { // проходимся мапом по элементам массива получаем коллекцию адресов с id
//   const finishTimer = performance.now() // запускаем 2 таймер
//   const differenceTimers = finishTimer - startTimer // присваиваем разницу первого и последнего таймера в новую переменную
//   console.log(`общее время выполнения ${differenceTimers}`)
//   console.log(`массив постов ${result}`)
// }).catch(error => console.error(`error on ${error}`))

// 🔹 Задача на Promise.race
// 🏁 Задача 3: Таймаут запроса
// Условие:
//  Сделай запрос на https://jsonplaceholder.typicode.com/comments, но если он не ответит за 2 секунды — прерви с сообщением "Превышено время ожидания"

const getRequest = fetch('https://jsonplaceholder.typicode.com/comments') // присваиваю запрос в переменную
const timer = new Promise((res, rej) => {
  setTimeout(() => {
    rej(new Error('Превышено время ожидания'))
  }, 2000)
})

Promise.race([getRequest, timer]).then(time => {
  console.log('Time: ', time)
}).catch(er => console.error(er))



// 🔸 Задачи по микрозадачам / Event Loop

// 🧠 Задача 5: В каком порядке выведется?
// Условие:
// console.log('A'); -> 1

// setTimeout(() => {
//     console.log('B'); -> 4
// }, 0);

// Promise.resolve().then(() => {
//     console.log('C'); -> 3
// });

// console.log('D'); -> 2



// 🧠 Задача 6: Сколько раз выполнится then?
// const p = new Promise((resolve) => {
//     resolve("ok");
//     resolve("still ok"); // вторая игнорируется
// });

// p.then(console.log); -> 1 раз
// Не знаю почему просто по наитию...



// 🧠 Задача 7: Как сделать, чтобы console.log(3) был первым?

// setTimeout(() => console.log(1)); -> 3
// Promise.resolve().then(() => console.log(2)); -> 2
// console.log(3); -> 1

// Он и так первый так как он в мейне. Промис второй так как он миеротакска. Таймаут последний так как макротаска