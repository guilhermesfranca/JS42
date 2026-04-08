//Escreva uma função que recebe um número e retorna se ele é par ou ímpar.

function odd_even(x) {
    if(typeof(x) !== "number" || isNaN(x))
        return "O argumento passado deve ser um número";
    return x % 2 === 0 ? "Par" : "Ímpar"
}

console.log(odd_even("22"));
console.log(odd_even(-2));
console.log(odd_even(27));
console.log(odd_even(23));
console.log(odd_even(22));
console.log(odd_even(NaN));

