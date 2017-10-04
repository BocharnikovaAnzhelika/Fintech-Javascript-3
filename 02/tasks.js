/* eslint-disable linebreak-style,indent,eol-last,semi */
/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      logger(i);
    }, 100);
  }
}

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {
    const OutArray = args;

    return function(...args) { // (*)
      const InnerArray = args;

      return func.apply(context, OutArray.concat(InnerArray));
    };
}


/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x) {
  let Cursum = x;

  function add(y) {
    if (y) {
      Cursum += y;
      return add;
    }
    return Cursum;
  }
  if (x !== undefined) {
    return add;
  }
  return 0;
}
/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  let i;
  const FirstSet = {},
    SecondSet = {};

  for (i = 0; i < first.length; ++i) {
    (FirstSet[first[i]] === undefined) ? FirstSet[first[i]] = 0 : FirstSet[first[i]]++;
  }

  for (i = 0; i < second.length; ++i) {
    (SecondSet[second[i]] === undefined) ? SecondSet[second[i]] = 0 : SecondSet[second[i]]++;
  }
  if (first.length !== second.length) {
    return false;
  }
  let flag = true;

  for (i in FirstSet) {
    (FirstSet[i] === SecondSet[i]) ? flag *= true : flag *= false;
  }
  if (flag) {
    return true;
  }
  return false;
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  const cache = {},
    ans = arr.filter(number => {
      if (cache[number] === undefined) {
        cache[number] = 1;
        return number;
      }
      return false;
    });

  function compareNumeric(a, b) {
    return a - b;
  }
  ans.sort(compareNumeric);
  return ans;
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  function compareNumeric(a, b) {
    return a - b;
  }
  const ans = first.filter(number => {
    return second.some(n => {
      return n === number;
    });
  });

  ans.sort(compareNumeric);
  return ans;
}

/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  if (left === right) {
    return true;
  }
  if (left.length !== right.length) {
    return false;
  }
  let count = 0;

  for (let i = 0; i < left.length; ++i) {
    if (left[i] !== right[i]) {
      ++count;
    }
  }

  return count === 1;
}

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
// eslint-disable-next-line eol-last,semi
};