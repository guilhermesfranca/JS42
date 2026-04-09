/*Imprima um triângulo de asteriscos com N linhas, onde N é uma variável que você define.
Linha 1: *
Linha 2: **
Linha 3: ***
...
*/
function triangDeX(x) {
    for (let i = 1; i <= x ; i++) {
        console.log("*".repeat(i)); 
}
}


triangDeX(3)