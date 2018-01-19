//Acá escribe tu código
//Test
var A = [1, 3, 6, 4, 1, 2];

//Solution
function solution(A){

    A.sort();
    var min = A[0];
    for(var i = 1 ; i < A.length-1 ; i++){
        var a = parseInt(A[i]);
        var b = parseInt(A[i+1]);
        if( !(a+1 == (b) || a == b) ){
            return (a+1);
        };
    };

    return min;


};

var retorno = solution(A);