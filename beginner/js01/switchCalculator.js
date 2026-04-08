//Crie uma calculadora que recebe dois números e uma operação ('+', '-', '*', '/') via variáveis e executa a operação usando switch.

function switchCalc(a, b, operator) {
  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) return "Erro: valores inválidos";

  if (operator === "/" && numB === 0) return "Erro: divisão por zero";

  switch (operator) {
    case "+":
      return numA + numB;
    case "-":
      return numA - numB;
    case "*":
      return numA * numB;
    case "/":
      return numA / numB;
    default:
      return "Operador inválido";
  }
}

console.log(switchCalc(2, 2, "+"));
console.log(switchCalc(2, 2, "-"));
console.log(switchCalc(2, 2, "*"));
console.log(switchCalc(2, 2, "/"));
console.log(switchCalc("2", "22", "+"));
console.log(switchCalc("28", 2, "*"));
console.log(switchCalc("abx", 2, "*"));
