//Acá escribe tu código
var A = [2, 1];
//var A = [];



function solution(A){

    A.sort(function(a,b){
        return a - b});
    var missingValue = 1;
    var correlativeValues = false;

    if (A.length >= 1 && A[0] != 1){
        return 1;
    }

    for (var i = 0; i < A.length-1; i++)
    {
        if (A[i] != A[i+1]-1)
        {
            missingValue = A[i]+1;
            //When it finds the missing one stops the cycle
            break;
        }
    }
    if(i == A.length-1)
    {
        correlativeValues = true;
    }


    if(correlativeValues == true)
    {
        return A.length+1;
    }    
    return missingValue;
}

retorno = solution(A)


