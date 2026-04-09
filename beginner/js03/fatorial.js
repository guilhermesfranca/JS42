//Crie uma função que calcula o fatorial de um número. Depois, crie outra versão que previne inputs inválidos.


function fatorial(x) {
    if (x <= 1) 
        return 1;
    return  x * fatorial(x - 1)
   
}

function guardedFactorial(x) {
    if(typeof x !== "number" || Number.isNaN(x))
        return "entrada inválida";
    if(x < 0)
        return "Não existe fatorial de número negativo";
    if(!Number.isInteger(x))
        return "O número deve ser um inteiro"
    if (x === 1) 
        return 1;
    return  x * guardedFactorial(x - 1)
}

console.log(fatorial(4))
console.log(guardedFactorial(-4))
console.log(guardedFactorial(2.4))
console.log(guardedFactorial("44"))
console.log(guardedFactorial(NaN))