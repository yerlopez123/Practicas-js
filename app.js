//variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "Vez";
let maximoIntentos = 6;

//Ciclo while

        while (numeroUsuario != numeroSecreto){
        //Solicitar al usuario un numero
        numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible}`));      

        console.log(typeof(numeroUsuario));
        /*
        Este codigo realiza la comparacion 
        */
        if(numeroUsuario == numeroSecreto){
            alert(`Felicidades, el numero es : ${numeroUsuario} Lo hiciste en ${intentos} ${intentos == 1 ? "Vez" : "veces"}`);
        }
        //No acertaste el numero secreto
            else{
                if(numeroUsuario > numeroSecreto) alert('El numero secreto es menor');
                else        
                alert('El numero secreto es mayor');
        //el numero secreto es mayor
            }
            //inrementar el contador de intentos cuando no  acierta 
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        palabraVeces = "Veces";
        if (intentos > maximoIntentos) {
            alert(`Lo siento, llegaste al numero maximo de ${maximoIntentos} intentos`);
            break;
        }
        
        }
