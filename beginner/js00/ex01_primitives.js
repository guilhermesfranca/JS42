//Tipos primitivos
//Declare uma variável para cada tipo primitivo do JS e imprima o tipo com typeof.

const bool = true;
const num = 23;
const big = 23n;
const strin = "Guilherme"
const x = undefined;
const symbol = Symbol('id')
const nulo = null


console.log(`A variável bool é do tipo: ${typeof(bool)}`)
console.log(`A variável num é do tipo: ${typeof(num)}`)
console.log(`A variável big é do tipo: ${typeof(big)}`)
console.log(`A variável strin é do tipo: ${typeof(strin)}`)
console.log(`A variável x é do tipo: ${typeof(x)}`)
console.log(`A variável symbol é do tipo: ${typeof(symbol)}`)
console.log(`A variável nulo é do tipo: ${typeof(nulo)}`)
console.log(`nulo: ${typeof nulo} (bug histórico, deveria ser "null")`);