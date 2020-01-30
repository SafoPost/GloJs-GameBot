'use strict';

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


ourNumber(5);

function ourNumber(q) {
  let num = prompt('Угадай число от 1 до 100');
  while (isNaN(parseFloat(num))) {
    alert('Введи число!');
    ourNumber(q);
  };
  if (num !== q) {
    if (num > q) {
      alert('Загаданное число меньше, попробуй снова');
      ourNumber(q)
    };
    if (num < q) {
      alert('Загаданное число больше, попробуй снова');
      ourNumber(q)
    };
  };
  return alert('Число угадано!')
};
