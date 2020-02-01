'use strict'

function startFunction() {

  // Функция формирования рандомного числа
  function getRandomInt() {
    return Math.floor(Math.random() * 100);
  };

  // Функция на проверку числа
  const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  };

  function startGame() {

    let ourNumber = getRandomInt(); // Вызываем функцию с рандомным числом

    let start = confirm('Давай поиграем!');

    let attempt = 10;


    start === true ? guessTheNumber() : alert('Ок, может в другой раз...'); // Запускаем игру?

    function guessTheNumber() {

      if (attempt === 0) { // попытки закончились
        let restart = confirm('К сожалению, попытки закончились. Хочешь сыграть снова?')
        return restart === true ? startFunction() : alert('Всего хорошего!'); // Перезапустить игру?
      };

      let num = prompt('Угадай число от 1 до 100. Количество попыток: ' + attempt);

      if (!isNumber(num)) { // Вызываем функцию проверки числа
        num = +num;
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
      let victory = confirm('Угадал! Хочешь сыграть снова?');
      return victory === true ? startFunction() : alert('Спасибо за уделённое время!');
    };
  };
  startGame();
};
startFunction();

