//Adivinhe o Número
//Defina um número secreto. Simule tentativas (array de tentativas hardcoded) e use break quando o número for encontrado.

function guessNum(num) {
  let tents = [1, 2, 3, 4, 6, 5, 42, 45, 65, 2123, 4, 34, 123, 9];

  for (let i = 0; i < tents.length; i++) {
    if (num === tents[i]){
      console.log(
        `Achei o número ${tents[i]} que é igual ao número passado como parametro ${num}`,
      );
    break;
    }
  }
}


guessNum(34)