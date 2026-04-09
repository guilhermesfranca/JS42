/**Crie uma função que recebe primeiro nome, sobrenome e retorna o nome completo formatado corretamente (primeira letra maiúscula).
 
 */

function nameForm(nom, surn) {
  return `${nom[0].toUpperCase() + nom.slice(1).toLowerCase()} ${surn[0].toUpperCase() + surn.slice(1).toLowerCase()}`;
}

console.log(nameForm("guIlhErme", "FRANça"))