//Dado um número representando graus Celsius, imprima: 'frio' (<15), 'ameno' (15–25), 'quente' (>25).

function defTemp(temp) { //teria talvez ter sido uma melhor implementação com if/else, mas quis fazer dessa forma para se tornar mais didático
  const graus = Number(temp);
  switch (true) {
    case graus < 15:
      console.log("frio");
      break;
    case graus >= 15 && graus <= 25:
      console.log("ameno");
      break;
    case graus > 25:
      console.log("quente");
      break;

    default:
      console.log("deve ser passado um número");
      break;
  }
}

defTemp(-23);
defTemp(28);
defTemp("28");
defTemp("Não é um número");
