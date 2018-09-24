
// 1.При відкритті сторінки виведіть на екран повідомлення Hello!

alert("Hello!");

/* 2.Створіть span у вигляді кнопки "Відправити".
При кліку на нього в консоль повино видати повідомлення:
"Користувач відправляє дані форми на сервер." */

let btn = document.getElementById('butt');
btn.addEventListener('click', function(){
	console.log("Користувач відправляє дані на сервер.")
});

// 3.Задайте ідентифікатор (id) спану, виведіть його в консоль у вигляді html-коду 

console.log("У вигляді html-коду:");
console.log(btn);

// та у вигляді об'єкта.

console.log("У вигляді об'єкта:");
console.dir(btn);

/*4. Виведіть в консоль повідомлення про реєстрацію нового користувача, 
оздобивши відповідним до змісту повідомлення кольором:*/

console.warn("Занадто простий пароль, бажано використати більше символів.");
console.error("Сервер не відповідає, дані неможливо отримати.");


// 5. Виведіть в консоль групу строк з кольорами райдуги.

console.groupCollapsed('Група строк з кольорами райдуги');

let colors = ['red', 'orange', 'yellow', 'green', 'lightBlue', 'blue', 'purple'];
for (let i = 0; i <= colors.length; i++) {
  console.log(colors[i]);
}

console.groupEnd();

/*6. Створіть три змінних a, b та c, задайте їм довільні числові значення.
Виведіть в консоль результат обчислення a * b + c у вигляді повної формули, напкриклад: */

let a = 13;
let b = 5;
let c = 21;
let result;

result = a*b + c;
console.log("Результат обчислення формули a * b + c: " + result);