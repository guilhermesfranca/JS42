/*
Quiz de Personalidade
Crie um mini quiz com 5 perguntas hardcoded (variáveis com as respostas). Com base nas respostas, dê um resultado final ao usuário. Exemplo: qual linguagem de programação você seria?
Mínimo 5 perguntas com pelo menos 3 opções cada
Lógica de pontuação acumulativa
Resultado final com base na pontuação
Todas as respostas definidas em variáveis no topo do arquivo


Ranking de conhecimento em JSON

1 -Quem criou o javascript? 
a) Google, b) netscape c) Oracle

2- O que significa JSON? 
a) JavaScript Object Notation, b) Javascript Oriented Note, c) Java Source Online Note

3- Qual a ultima versão de Javascript?
a) ECMAScript6, b)ECMAScript2024 c) ECMAScript2025

4- Quando foi criado o Javascript
a) 1995 b) 2000 c) 2007 

5- Quem foi o antecessor do Javascript?
a) Java b)TypeScript c)Livescript
*/

const respostas = ["b", "a", "b", "a", "c"];

function quiz(array) {
  if (array.length !== respostas.length) {
    console.log("entrada inválida");
    return;
  }
  let count = 0;
  let nivel;
  for (let i = 0; i < respostas.length; i++) {
    if (!["a", "b", "c"].includes(array[i])) {
    console.log("resposta inválida detectada");
    return;
  }
    if (array[i] === respostas[i]) count++;
  }
  count <= 2
    ? (nivel = "iniciante")
    : count < 5 
      ? (nivel = "intermediário")
      : (nivel = "avançado");
  console.log(`nível do avaliado: ${nivel}`);
  console.log(`pontuação: ${count * 20}pts`);
}
quiz(["b", "a", "b", "a"]);
quiz(["d", "a", "b", "a", "c"]);
quiz(["s", "d", "b", "a", "c"]);
quiz(["a", "a", "b", "a", "c"]);
quiz(["b", "a", "b", "a", "c"]);

