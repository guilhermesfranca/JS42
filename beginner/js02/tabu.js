//Dado um número, imprima sua tabuada completa de 1 a 10 de forma formatada.


function tabuada(x) {
    console.log("=================")
    console.log(`TABUADA DE ${x}`)
    console.log("=================")
    for(let i = 0; i <= 10; i++)
    {
        console.log(`${x} x ${i} = ${x * i}`)
    }
}

tabuada(2)