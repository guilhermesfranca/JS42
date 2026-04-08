//Dada uma nota de 0 a 100, classifique como A (90+), B (80+), C (70+), D (60+) ou F. Use if/else if.

function grademe(nota) {
    if (typeof nota !== "number" || nota < 0 || nota > 100){ //aqui to fazendo validações de entradas erradas
        console.log("entrada inválida");
        return;
    }
    
    if(nota >= 90)
        console.log("A")
    else if(nota >= 80)
        console.log("B")
    else if(nota >= 70)
        console.log("C")
    else if(nota >= 60)
        console.log("D")
    else
        console.log("F")
}

grademe(89.9)
grademe("asfd88")
grademe(370)
grademe(59)
