const student = {
  name: "Guilherme",
  age: 27,
  tech: ["Javascript", "Typescript", "C"],
  goal: "Meu objetivo principal no momento é adquirir conhecimento e ingressar na área",
  alcançado: false
};

console.log("============================================================");
console.log("                         CARD              ");
console.log("============================================================");
console.log(`nome: ${student.name}`);
console.log(`idade: ${student.age}`);
console.log(`Techs atuais: ${student.tech.join(", ")}`);
console.log(`Objetivo: student.goal`)
console.log(`alcançado? ${student.alcançado}${!student.alcançado ? " AINDA não!!" : "PARABÉNS!!"  }`)
