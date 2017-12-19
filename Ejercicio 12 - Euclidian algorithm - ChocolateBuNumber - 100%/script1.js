//Acá escribe tu código

//Parámetros
N = 10      //Número de chocolates
M = 4       //Step

function chocolateByNumber(N, M) {
    var a = Math.max(N, M);
    var b = Math.min(N, M);

    var maximoComunDivisor = getmaximoComunDivisor(a, b);
    var minimoComunMultiplo = Math.abs(N * M) / maximoComunDivisor;
    return minimoComunMultiplo / M;
}

function getmaximoComunDivisor(a, b) { 
if (!b) { 
return a; 
}
return getmaximoComunDivisor(b, a % b); 
};

retorno = chocolateByNumber(N, M);


