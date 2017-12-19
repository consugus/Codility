//Acá escribe tu código
var X = 10;
var Y = 85;
var D = 30;



function contarSaltos (X,Y,D){    
    return Math.ceil((Y-X)/D);    
}

var retorno = contarSaltos(85, 85, 3);