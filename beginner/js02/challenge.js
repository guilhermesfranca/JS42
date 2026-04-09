const vendas = [
  { mes: "janeiro", valor: 120, nome: "teclado" },
  { mes: "fevereiro", valor: 80, nome: "mouse" },
  { mes: "março", valor: 150, nome: "monitor" },
  { mes: "abril", valor: 60, nome: "cabo USB" },
  { mes: "maio", valor: 200, nome: "notebook" },
  { mes: "junho", valor: 90, nome: "fone de ouvido" },
  { mes: "julho", valor: 110, nome: "webcam" },
  { mes: "agosto", valor: 70, nome: "teclado mecânico" },
  { mes: "setembro", valor: 140, nome: "cadeira gamer" },
  { mes: "outubro", valor: 95, nome: "mouse pad" },
  { mes: "novembro", valor: 300, nome: "placa de vídeo" },
  { mes: "dezembro", valor: 250, nome: "console" }
];

function totalVendas(array) {
    let sum = 0;
    for(let element of array)
    {
        sum = sum + element.valor
    }
    return sum;
}
function maiorVenda(array) {
    let res = array[0];
    for (let element of array) {
        if(element.valor > res.valor) 
            res = element
    }
    return res
}

function menorVenda(array) {
    let res = array[0];
    for (let element of array) {
        if(element.valor < res.valor) 
            res = element
    }
    return res
}

function mediaVendas(array) {
    let sum = 0;
    let i = 0;
    while(i < array.length)
    {
        sum = sum + array[i].valor;
        i++;
    }
    return sum / array.length
}


console.log("=============================================")
console.log("            Relatório de vendas")
console.log("=============================================")
console.log(`Qtd vendida: ${vendas.length}`)
console.log(`Total vendido: ${totalVendas(vendas)} Euros`)
console.log(`Maior venda: ${maiorVenda(vendas).nome} - ${maiorVenda(vendas).valor} Euros`)
console.log(`Menor venda: ${menorVenda(vendas).nome} - ${menorVenda(vendas).valor} Euros`)
console.log(`Media de Vendas: ${mediaVendas(vendas)} Euros`)