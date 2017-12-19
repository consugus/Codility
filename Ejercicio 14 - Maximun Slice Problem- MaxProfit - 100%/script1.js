//Acá escribe tu código

//Parámetros
var A = [];
A = [23171, 21011, 21123, 21366, 21013, 21367];
B = [3];

//100%
function solution(A){
    var min = A[0],
        maxProfit = 0;    
    for (var i = 0; i < A.length; i++){
      maxProfit = Math.max(maxProfit, A[i] - min);
      min = Math.min(min, A[i]);
    }    
    return maxProfit;
}




//66% (100% de los resultados, pero 20% performance xq es n^2)
function maxProfit1(A){
var maxProfit = 0;
var aux;
var firstTime = true;
for(var i = 0 ; i < A.length -1; i++){
    for (var j = i+1 ; j < A.length ; j++){        
        aux = A[j] - A[i];
        if(maxProfit < aux){
            maxProfit = aux;
        };
    };
};
return maxProfit;
};



retorno = maxProfit1(A);

