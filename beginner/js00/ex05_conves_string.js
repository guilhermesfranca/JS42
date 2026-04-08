//Converta a string '42' para número, o número 0 para boolean, e o boolean true para string. Imprima os resultados e os tipos.

// 1. String para número
let a = "42";
let num = Number(a);
console.log(`Valor: ${num}, Tipo: ${typeof num}`);

// 2. Número para boolean
let b = 0;
let bool = Boolean(b);
console.log(`Valor: ${bool}, Tipo: ${typeof bool}`);

// 3. Boolean para string
let c = true;
let str = String(c);
console.log(`Valor: ${str}, Tipo: ${typeof str}`);
