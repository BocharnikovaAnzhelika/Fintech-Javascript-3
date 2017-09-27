/* eslint-disable linebreak-style,no-trailing-spaces */
/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  let l = 0,
    r,
    num,
    extr = { min: Infinity, max: -Infinity };

  while (l < string.length) {
    r = l + 1;
    if (!isNaN(parseFloat(string[l]))) { // && isFinite(string[i])
      while ((!isNaN(parseFloat(string[r]))) || (string[r] === '.')) { // && isFinite(string[k])
        r += 1;
      }
      num = +(string.substr(l, r - l));
      if (string[l - 1] === '-') {
        num *= (-1);
      }
      extr.max = Math.max(num, +extr.max);
      extr.min = Math.min(num, +extr.min);
    }
    l = r;
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
  if (x === 0 || x === 1) {
    return x;
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
function fibonacciWithCache(n) {
  const mn = () => {
    const cache = {};

    return function f(x) {
      if (x === 0 || x === 1) {
        return x;
      }
      if (x in cache) {
        return cache[x];
      }
      cache[x] = f(x - 1) + f(x - 2);
      return cache[x];
    };
  };
  const ans = mn();

  return ans(n);
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
  let rows = Math.trunc((max + 1) / cols), i, ans = '', next;

  if (((max + 1) % cols) !== 0) {
    rows += 1;
  }
  for (i = 0; i < rows; ++i) {
    next = i;
    while (next <= max) {
      if (next < 10) {
        ans += ' ';
      }
      ans += next;
      if (next + rows <= max) {
        ans += ' ';
      }
      next += rows;
    }
    if (i !== rows - 1) {
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
  let count = 0,
    i = 0,
    ans = '';

  while (i < n) {
    ans += input[i]; count = 1;
    while (input[i + 1] === input[i]) {
      count += 1; i += 1;
    }
    if (count !== 1) {
      ans += count;
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
