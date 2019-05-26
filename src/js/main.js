import { Test } from './lib/sub';
const test = new Test();
test.hello();

const promisetest = new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, 5000);
});

promisetest.then(() => {
  console.log('次の処理');
});

let bar = 10;
const hoge = `hogehoge${bar}`;
console.log(hoge);

class Caluculator {
  constructor(initialvalue) {
    this.value = initialvalue;

    this.increment = this.increment.bind(this);
  }

  increment() {
    return this.value + 1;
  }
}

console.log('before:', 0);
console.log('***increment***');

const increment = new Caluculator(0).increment();

console.log('after:', increment);
