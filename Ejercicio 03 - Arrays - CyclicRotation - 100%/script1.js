//Acá escribe tu código
N = [3, 9, 5, 1, 2, 6];
K = 1


function Solution(A, rotationIndex){
    B = [];
    if(K > A.length){
        Ka = K % A.length;
    }
    else{
        Ka = K;
    }
        for(i = 0 ; i < A.length ; i++)
    {
        if((i+Ka)>= A.length)
        {
            B[(i+Ka)-(A.length)] = A[i];
        }
        else
        {
            B[i+Ka] = A[i];
        }
    }

return B;
}
//retorno = "Hola que tal";
retorno = Solution([3, 9, 5, 1, 2, 6], 1);

//Should return [9, 5, 1, 2, 6, 3]