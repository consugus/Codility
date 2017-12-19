//Acá escribe tu código
var A = [];
A = [2, 1, 1, 2, 3, 1];
B = [1];

function distinct(A){
var counter = 0;

if (A.length == 0){
    return counter;
};

if (A.length == 1){
    return A.length;
};

ASorted = A.sort();
counter++;
for (var i = 0 ; i < ASorted.length - 1 ; i++){
    if(!(ASorted[i] == ASorted[i+1])){
        counter++;
    };
};

return counter;
};





retorno = distinct(B);