//Dado um valor de cor ('vermelho', 'amarelo', 'verde'), imprima a instrução correta para um motorista. Use switch.


function semaforo(cor) {
    const color = cor.toLowerCase();
    switch (color) {
        case 'vermelho':
            console.log('PARE');        
            break;
        case 'amarelo':
            console.log('tenha cautela');        
            break;
        case 'verde':
            console.log('siga em frente');        
            break;
    
        default:
            console.log("atributo passado inválido");
            
            break;
    }
}

semaforo("Verde")
semaforo("verde")
semaforo("Amarelo")
semaforo("Vermelho")
semaforo("Verdeds")