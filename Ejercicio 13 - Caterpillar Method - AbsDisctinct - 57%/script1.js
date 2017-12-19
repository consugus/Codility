//Acá escribe tu código

//Patrámetros
var A = [];
A = [-5, -3, -1, 0, 3, 6]; //el vector ya viene ordenado
B = [1, 1, 1, 1, 1, 1, 1, 1]




function absDistinct(A){
    
    for (var i = 0 ; i < A.length ; i++){
        (A[i] = Math.abs(A[i]));
    };
    A = A.sort();
    for (var i = 0 ; i < A.length ; i ++){
        if(A[i] == A[i+1]){
            A.splice(i+1,1);
        };
    };
    console.log(A);

return A.length;
};


retorno = absDistinct(B);