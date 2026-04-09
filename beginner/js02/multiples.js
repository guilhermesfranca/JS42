/*Múltiplos
Dado um número N, imprima todos os múltiplos de N menores que 1000 usando continue para pular os não-múltiplos.*/
function multiples(num) {
for (let i = 0; i < 1000; i++) {
    if(i % num !== 0 )
        continue
    else
        console.log(i);
}
}

multiples(300)