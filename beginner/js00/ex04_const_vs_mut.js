//Tente reatribuir um valor a uma variável const. O que acontece? Explique no código com um comentário.

let x = "Guilherme"
const d = "Imútavel"
console.log("lidando com Let")
console.log(`Antes o valor de x é: ${x} do tipo: ${typeof(x)} `)
x = 23;
d = 23;
console.log(`Depois o valor de x passa a ser: ${x} do tipo: ${typeof(x)} `)
console.log(d) // quando tentado atribuir novo valor a uma variável do tipo const, um erro de Assignment to constant variable é lançado, ou seja, o JS não permite reatribuição de valor a variável do tipo const
