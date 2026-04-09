//Crie exemplos que demonstram a diferença entre variáveis locais e globais. Mostre o que acontece quando você tenta acessar cada uma.

//Variável global é definida fora de qualquer função e pode ser acessada em qualquer parte do codigo

//variavel local fica acessível somente no escopo da função


let nome = "Guilherme"

function mostrarNomeEIdade() {
    let idade = 26;
    console.log(nome)
    console.log(idade)
}

mostrarNomeEIdade()
console.log(idade)  // dá erro pq está chamando uma variável que está definidad em escopo da função mostrarnomeidade