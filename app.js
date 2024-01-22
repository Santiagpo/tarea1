
let NumeroSecreto = 0;
let intentos = 0;
let ListaNumerosSorteados =  [];
let NumeroMaximo = 10;


function VerificarIntento(){
    
   let NumeroUsuario = parseInt(document.getElementById('ValorUsuario').value);    
    if(NumeroUsuario === NumeroSecreto){
AsignarTextoElemento('p',`Acertaste en  ${intentos}  ${(intentos ===1) ? 'intento' : 'intentos'}`);    

document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(NumeroUsuario> NumeroSecreto){
            AsignarTextoElemento('p','El numero secreto es menor');
        }
        else{

           AsignarTextoElemento('p','El numero secreto es mayor'); 
        }   
        LimpiarCaja();
        intentos++;

    }

    return;
}

function LimpiarCaja(){
 document.querySelector('#ValorUsuario').value = '';

    
}

function AsignarTextoElemento(elemento, texto){

    let elementoHtml = document.querySelector(elemento);
elementoHtml.innerHTML = texto;

}

function GenerarNumeroSecreto() {
    
let NumeroGenerado =  Math.floor(Math.random()*NumeroMaximo)+1;

console.log(NumeroGenerado);
console.log(ListaNumerosSorteados);

if(ListaNumerosSorteados.length == NumeroMaximo){

AsignarTextoElemento('p','Ya se sortearon todos los numeros posibles');    

}
else{

    if(ListaNumerosSorteados.includes(NumeroGenerado)){

        return GenerarNumeroSecreto();

    }   else{
        ListaNumerosSorteados.push(NumeroGenerado);
         return NumeroGenerado;

        }

    }
}



function ConducionesInciales(){
    AsignarTextoElemento('h1', 'Juego del numero secreto');
    AsignarTextoElemento('p',`Indique un numero de 1 a ${NumeroMaximo}`);
    NumeroSecreto = GenerarNumeroSecreto();
    intentos = 1;

}

function ReiniciarJuego() {

LimpiarCaja();
ConducionesInciales();
document.querySelector('#reiniciar').setAttribute('disabled','true');

}

ConducionesInciales();