//Acá escribe tu código

function contarBinaryGap(N){
    numeroConvertido = N.toString(2);

        var contadorMax = 0;
        var aux = 0;
        for(var i = 0; i < numeroConvertido.length; i++){
        
        if(numeroConvertido[i] == 0){
            aux++;        
        }
        // if(contadorMax < aux){
           
        // }
        if (numeroConvertido[i] == 1){
            if(contadorMax < aux){
                contadorMax = aux; 
            }            
            aux = 0;
        }    
    }

return contadorMax;
}
retorno = contarBinaryGap(16);