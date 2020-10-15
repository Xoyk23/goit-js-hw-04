/* Поиск наибольшего значения среди свойств объекта
 *Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненных задач содержатся как свойства объекта в формате "имя":"кол-во задач".
 */

const findBestEmployee = function (employees) {
  ('use strict');
  let bestWorker = '';
  // 1.Сделать из обьекта массив значений и найти самое большое

  const bestRezult = Math.max(...Object.values(employees));
  // console.log(bestRezult);

  // 2.Сделать из обьекта массив ключей и перебрать его

  const workers = Object.keys(employees);
  for (let key of workers) {
    // 3.Cравнить лучший результат с значением ключей если результат равняется вывести ключ
    if (bestRezult === employees[key]) {
      bestWorker = key;
    }
  }

  // 4. Вернуть значение лучшего работника

  return bestWorker;
  // console.log(workers);
  // console.log(bestResult);
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

// const bestRezult = Math.max(...Object.values(employees));

// Попытка найти лучший результат через фор оф

// // let bestResult = results[0];
//   for (const result of results) {
//     if (result > bestResult) {
//       result = bestResult;
//     }
//   }
