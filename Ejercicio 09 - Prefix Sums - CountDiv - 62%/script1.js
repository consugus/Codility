//Acá escribe tu código
var A = 5;
var B = 5;
var K = 2;

function countDiv(A, B, K){

var contadorDiv = 0
for (var i = A; i <= B; i++ ){
    if (i%K == 0){
        contadorDiv ++;
    };
};
return contadorDiv;

};

retorno = countDiv(A, B, K);