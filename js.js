// Урок 3 — Замыкание (Closures) (1.5 часа)
// План
// 1. Повтор функций — 15 мин
// 2. Область видимости — 20 мин
// 3. Что такое замыкание — 25 мин
// 4. Практические примеры — 20 мин
// 5. Мини задачи — 10 мин

//? 1. Повтор функций
// function hello() {
//   console.log('Hello')
// }

// Объясни:
// Функция — это отдельная область видимости.

//? 2. Scope
// function test() {
//   const name = 'Isa'
// }

// Снаружи:
// console.log(name)
// Ошибка.
//? Как объяснять
// Потому что переменная живет только внутри функции.

//? 3. Замыкание

// Главный пример:

// function counter() {
//   let count = 0

//   return function () {
//     count++
//     console.log(count)
//   }
// }

// const increment = counter()

// increment()
// increment()
// increment()

// Сначала
// function counter()

// Это функция-фабрика.

// Она создает что-то новое.

// let count = 0

// Локальная переменная внутри counter.

// return function ()

// Counter возвращает другую функцию.

// Самое главное
// Несмотря на то,
// что counter уже закончила работу,
// внутренняя функция всё равно помнит переменную count.
// Это и есть замыкание.

//? Очень простое определение
// Замыкание —
// это когда функция помнит переменные из места,
// где была создана.

// Где используется
// Обязательно расскажи:
// счетчики
// приватные переменные
// debounce
// throttle
// React hooks
// event handlers

// Практика

// Сделать:

// счетчик лайков
// счетчик кликов
// createUser()

//! Решение - счетчик лайков
// function likeCounter() {
//   let likes = 0
//   return function () {
//     likes = likes + 1
//     const text = document.getElementById('likeCount')
//     text.textContent = 'Likes: ' + likes
//   }
// }

// const likeHandler = likeCounter()
// const button = document.getElementById('likeBtn')
// button.addEventListener('click', likeHandler)
