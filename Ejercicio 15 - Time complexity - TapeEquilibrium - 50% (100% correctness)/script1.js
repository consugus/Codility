//Acá escribe tu código

//Parámetros

A = [3, 1, 2, 4, 3];
B = [3, 10];
C = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
D = [];

function solution(A){
    var minDiff = 0;
    var firstTime = true
    var p1, p2;
        
    for(var i = 1 ; i < A.length ; i++){
        var sumP1 = 0, sumP2 = 0;

        p1 = A.slice(0, i)
        p2 = A.slice(i, A.length);
        for(var j = 0 ; j < p1.length ; j++){
            if(sumP1 == 0){
                sumP1 = p1[j]; 
            }
            else{
                sumP1 += p1[j];
            };
        };

        for(var k = 0 ; k < p2.length ; k++){
            if(sumP2 == 0){
                sumP2 = p2[k]; 
            }
            else{
                sumP2 += p2[k];
            };
        };        
       
        if(firstTime){
            minDiff = Math.abs(sumP1-sumP2);
            firstTime = false;
        }
        else{
            if(minDiff > Math.abs(sumP1 - sumP2)){
                minDiff = Math.abs(sumP1 - sumP2);                
            };
       };          
    };
return minDiff;
};

retorno  = solution(D);