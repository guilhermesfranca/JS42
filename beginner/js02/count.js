//Imprima os números de 1 a 100 usando for, while e do...while. Qual a diferença entre eles?

console.log("Usando For:");

for (let i = 0; i <= 100; i++) {
  console.log(i);
}
let x = 0;

console.log("Usando While:");
while (x <= 100) {
  console.log(x);
  x++;
}
console.log("Usando Do While:");

let y = 0;
do {
  console.log(y);
  y++;
} while (y <= 100);

/*
Os três fazem basicamente um loop condicional.
A diferença entre for e while é que o for é mais organizado para casos em que já sabemos o início, a condição e o incremento, enquanto 
o while é mais flexível e pode ser usado quando não sabemos exatamente quantas vezes o loop vai rodar.
Já o do...while executa o bloco primeiro e só depois verifica a condição, garantindo que o código dentro dele rode pelo menos uma vez.
*/
