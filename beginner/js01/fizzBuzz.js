//Imprima os números de 1 a 50. Para múltiplos de 3, imprima 'Fizz'. Para múltiplos de 5, 'Buzz'. Para múltiplos de ambos, 'FizzBuzz'.

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}