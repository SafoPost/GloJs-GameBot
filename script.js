'use strict'

function startFunction() {

  function getRandomInt() {
    return Math.floor(Math.random() * 100);
  };

  const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  };

  function startGame() {

    let ourNumber = getRandomInt(); // Вызываем функцию с рандомным числом

    let start = confirm('Давай поиграем!');

    start === true ? guessTheNumber() : alert('Ок, может в другой раз...'); // Запускаем игру?

    function guessTheNumber() {
      let num = prompt('Угадай число от 1 до 100');

      if (!isNumber(num)) {
        num = +num;
        alert('Введи число!');
        return guessTheNumber();
      };
      if (num !== ourNumber) {
        if (num > ourNumber) {
          alert('Загаданное число меньше, попробуй снова');
          return guessTheNumber();
        };
        if (num < ourNumber) {
          alert('Загаданное число больше, попробуй снова');
          return guessTheNumber();
        };
      };
      confirm('Угадал! Хочешь сыграть снова?')
      return start === true ? startFunction() : alert('Спасибо за уделённое время!');
    };
  };
  startGame();
};
startFunction();


/* function guessTheNumber() {
  let num = prompt(' Угадай число от 1 до 100);

  // attempt === 0 ?
  //   confirm('К сожалению, попытки закончились. Хочешь сыграть снова?') === true ?
  //     guessTheNumber() :
  //     alert('Всего хорошего!)') :

  return getRandomInt();

  if (isNumber) {
    alert('Введи число!');
    return guessTheNumber();
  };
  if (num !== ourNumber) {
    if (num > ourNumber) {
      attempt--;
      alert('Загаданное число меньше, попробуй снова, осталось попыток: ' + attempt);
      return guessTheNumber();
    };
    if (num < ourNumber) {
      attempt--;
      alert('Загаданное число больше, попробуй снова, осталось попыток: ' + attempt);
      return guessTheNumber();
    };
  };
  return confirm('Число угадано!');
};

guessTheNumber(); */




// let isNumber = function (n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// };

/* function ourNumber(q) {
  let num = prompt('Угадай число от 1 до 100');
  if (isNaN(parseFloat(num)) && isFinite(num)) {
    alert('Введи число!');
    ourNumber(q);
  };
  if (num > q) {
    alert('Загаданное число меньше, попробуй снова');
    ourNumber(q);
  } else if (num < q) {
    alert('Загаданное число больше, попробуй снова');
    ourNumber(q);
  } else {
    alert('Угадал!')
  }
};

ourNumber(5); */

/* function ourNumber(q) {
  let num = prompt('Угадай число от 1 до 100');
  if (!isNaN(parseFloat(num)) && isFinite(num)) {
    alert('Введи число!');
    ourNumber(q);
  };
  if (num > q) {
    alert('Загаданное число меньше, попробуй снова');
    ourNumber(q);
  };
  if (num < q) {
    alert('Загаданное число больше, попробуй снова')
    ourNumber(q);
  };
  if (num === q) {
    alert('Угадал!')
  }
};

ourNumber(5); */


// function ourNumber() {
//   let q = 68;
//   let num = prompt('Угадай число от 1 до 100', 1);
//   while (isNaN(parseFloat(num))) {
//     alert('Введи число!');
//     ourNumber();
//   };
//   if (num !== q) {
//     if (num > q) {
//       alert('Загаданное число меньше, попробуй снова');
//       ourNumber()
//     };
//     if (num < q) {
//       alert('Загаданное число больше, попробуй снова');
//       ourNumber()
//     };
//   };
//   return alert('Число угадано!')
// };

// ourNumber();
