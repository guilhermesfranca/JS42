const itens = [
  { nome: "teclado", valor: 25 },
  { nome: "mouse", valor: 15 },
  { nome: "monitor", valor: 200 },
  { nome: "cabo HDMI", valor: 10 },
  { nome: "notebook", valor: 1500 },
  { nome: "fone de ouvido", valor: 40 },
  { nome: "webcam", valor: 60 },
  { nome: "cadeira", valor: 300 }
];
function transform(array) {
    const obj = {};
    for(let element of array)
        {
            obj[element.nome] = element.valor
        }
        return obj
    }

console.log(transform(itens))