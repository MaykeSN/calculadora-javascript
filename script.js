var visor = document.getElementById('resultado');

function calcular(tipo, valor){
    if(tipo === 'acao'){

        switch (valor) {
            case 'c':
                visor.value = '';
                break;
            case '=':
                var valorCampo = visor.value;
                visor.value = eval(valorCampo);
                break;
            default:
                visor.value += valor;
                break;
        }

    }else if(tipo === 'valor'){
        visor.value += valor; 
    }
}