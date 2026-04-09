/*Crie uma função separada para cada operação matemática básica. Crie uma função principal 'calcular(a, op, b)' que chama as outras.
 */

function sum(a,b) {
    return a + b;
}
function sub(a,b) {
    return a - b;
}
function div(a,b) {
    return a / b;
}
function mod(a,b) {
    return a % b;
}

function calcular(a,op,b)
{
    return op(a,b);
}

console.log(calcular(278,mod,5));