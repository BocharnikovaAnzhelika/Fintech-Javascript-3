/* eslint-disable linebreak-style,no-trailing-spaces */
/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  let i = 0,
    k,
    t,
    extr = { min: Infinity, max: -Infinity };

  while (i < string.length) {
    k = i + 1;
    if (!isNaN(parseFloat(string[i])) && isFinite(string[i])) {
      while ((!isNaN(parseFloat(string[k])) && isFinite(string[k])) || (string[k] === '.')) {
        k += 1;
      }
      t = +(string.substr(i, k - i));
      if (string[i - 1] === '-') {
        t *= (-1);
      }
      if (extr.min > t) {
        extr.min = t;
      }
      if (extr.max < t) {
        extr.max = t;
      }
    }
    i = k;
  }
  return extr;
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x === 1 || x === 2) {
    return 1;
  }
  return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciWithCache(x) {
  const cache = {};

  cache[1] = 1; cache[2] = 1;
  if (!(x in cache)) {
    cache[x] = fibonacciSimple(x);
  }
  return cache[x];
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {
  let r = Math.trunc((max + 1) / cols), i, ans = '', next;

  if (((max + 1) % cols) !== 0) {
    r += 1;
  }
  for (i = 0; i < r; ++i) {
    next = i;
    while (next <= max) {
      if (next < 10) {
        ans += ' ';
      }
      ans += next;
      if (next + r <= max) {
        ans += ' ';
      }
      next += r;
    }
    if (i !== r - 1) {
      ans += '\n';
    }
  }
  return ans;
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  const n = input.length;
  let k = 0,
    i = 0,
    ans = '';

  while (i < n) {
    ans += input[i]; k = 1;
    while (input[i + 1] === input[i]) {
      k += 1; i += 1;
    }
    if (k !== 1) {
      ans += k;
    }
    i += 1;
  }
  return ans;
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
