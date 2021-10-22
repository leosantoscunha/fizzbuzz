
export function fizzbuzz(num) {
  let response = '';
  
  if (num >= 1 && num <= 100) {
    if(!(num % 3) && !(num % 5)) {
      response = 'FizzBuzz';
    } else if (!(num % 3)) {
      response = 'Fizz';
    } else if (!(num % 5)) {
      response = 'Buzz';
    } else {
      response = num;
    }
  }

  return response;
}