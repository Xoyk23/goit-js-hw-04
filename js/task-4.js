/* Суммирование значений свойств объекта
* Напиши функцию countTotalSalary(employees) принимающую
* объект зарплат.Функция считает общую сумму зарплаты
* работников и возвращает ее.Каждое поле объекта,
передаваемого в функцию, имеет вид "имя":"зарплата". */

// 3. Перебрать массив значений и на каждой иттерацци + к сумме
// 4. Вернуть сумму зарплаты

const countTotalSalary = function (employees) {
  ('use strict');
  // 1. Создать переменую для общей суммы зарплат
  let totalSalary = 0;
  // 2. Сделать из обьекта массив значений
  const totalSalaryArr = Object.values(employees);
  // 3. Перебрать массив значений и на каждой иттерацци + к сумме
  for (let salary of totalSalaryArr) {
    totalSalary += salary;
  }
  return totalSalary;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log('This is total salary: ', countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log('This is total salary: ', countTotalSalary(supports));
// 500
