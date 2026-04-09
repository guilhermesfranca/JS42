// Imprima um padrão de xadrez 8x8 usando # e espaços com loops aninhados.
for (let i = 0; i < 8; i++) {
    let linha = ""
    for(let j = 0; j < 8; j++)
    {
        
        if((i + j) % 2 === 0)
            linha = linha + "#"
        else    
            linha = linha + " "
    }
    console.log(linha)
}