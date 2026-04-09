// Some todos os números pares de 1 a 1000 usando um loop. Imprima o resultado.
function evenSum() {
let count = 0;
for (let i = 0; i <= 1000; i+= 2) { //usando i+=2 pulamos sempre de 2 em 2 evitando assim a validação da condição if
        count = count + i;
}

console.log(count);
}

evenSum();