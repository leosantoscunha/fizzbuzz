import { fizzbuzz } from './fizzbuzz';

for (let index = 0; index <= 200; index++) {
  const print = fizzbuzz(index);
  if (print) {
    console.log(print)
  }
}