/* Напиши скрипт управления личным кабинетом интернет банка.
 * Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    this.transactions.push({
      id: this.transactions.length,
      amount,
      type,
    });
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
    return `На ваш баланс добавленно ${amount}, ваш текущий баланс ${this.balance}`;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    let message = '';
    if (this.balance < amount) {
      return (message = `Cнятие ${amount} не возможно, недостаточно средств`);
    } else {
      this.balance -= amount;
    }

    this.createTransaction(amount, Transaction.WITHDRAW);
    return `C вашего баланса снятно ${amount} , на балансе осталось ${this.balance}`;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].id === id) {
        return this.transactions[i];
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        sum += transaction.amount;
      }
    }
    return `сумма ${type} = ${sum}`;
  },
};

account.deposit(4569);
console.log('balance: ', account.getBalance());
console.log(account.withdraw(3000));
console.log('balance: ', account.getBalance());
console.log(account.deposit(1000));
console.log('balance: ', account.getBalance());
console.log(account.withdraw(3000));
console.table(account.transactions);
console.log(account.deposit(15000));
console.table(account.transactions);

console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
