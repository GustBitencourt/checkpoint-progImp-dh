//Função com pratos e seus tempos

function comida(prato, tempoSelecionado) {

    let tempoPreparo;

    switch (prato) {
        case 'pipoca':
            tempoPreparo = 10;
            validacao(tempoPreparo, tempoSelecionado)
            break;

        case 'macarrão':
            tempoPreparo = 8;
            validacao(tempoPreparo, tempoSelecionado)
            break;

        case 'carne':
            tempoPreparo = 15;
            validacao(tempoPreparo, tempoSelecionado)
            break;

        case 'feijão':
            tempoPreparo = 12;
            validacao(tempoPreparo, tempoSelecionado)
            break;

        case 'brigadeiro':
            tempoPreparo = 8;
            validacao(tempoPreparo, tempoSelecionado)
            break;

        default:
            console.log("Prato inexistente")
    }
}

//Função que valida os casos
function validacao(tempoPreparo, tempoSelecionado) {
    if(tempoSelecionado < tempoPreparo){
        console.log("Tempo de preparo suficiente")
    } else if(tempoSelecionado > 3 * tempoPreparo){
        console.log("Kaboom!!")
    } else if(tempoSelecionado > 2 * tempoPreparo){
        console.log("Sua refeição está queimada")
    } else {
        console.log("Seu prato está pronto!!")
    }
}


comida('macarrão', 5);
comida('macarrão', 30);
comida('macarrão', 20);
comida('macarrão', 13);

