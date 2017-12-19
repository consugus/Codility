//Acá escribe tu código
//var A = [9, 3, 9, 3, 9, 7, 9];//original
var A = [9, 3, 9, 3, 9, 7, 9] // expected 7
var B = [4,2,2]; // expected 4
var C = [91, 3, 9, 9, 91,9,9,9,9,11,3]; //expected 9
var D = [42]; // expected 42
var E = [4,2,2]; // expected 4
var F = [2,4,2]; // expected 4

function encontrarNoEmparejados(A){

    var listaNoEmparejados = [];
    var taSolito = true;
    var yaEvaluados= [];
    for (var i = 0 ; i < A.length; i++){
        if(yaEvaluados.includes(A[i])){
            continue;
        }
        for (var j = i + 1 ; j < A.length; j++){
            if((A[i] == A[j]) && (i!=j) ){
                yaEvaluados.push(A[i]);
                taSolito = false;
                break;
            }
        }
     if(taSolito){
         //listaNoEmparejados.push(A[i]);
         return A[i];
         //break;
         }
     taSolito = true;

    }
    //return listaNoEmparejados[0];
    return 0;
};



function solution(A){

    if(A.length == 1){
        console.log("Entró con un vector de longitud 1");
        return A[0];
    }
    //Primero ordeno el vector recibido
    B = A.sort(function(a,b){
        return (a-b);
    });

    console.log("Vector Ordenado: " + A + "    A.Length= " + A.length);
    var counter = 1;
    var unpaired = 0;

    for(var i = 0; i < A.length-1; i++){
        if(A[i] != A[i-1] && A[i] != 0){
            //resets the counter after checking the next number
            counter = 1;
        }
        if(A[i] == A[i+1]){
            //If continues evaluating the same number increments counter
            counter ++;
            console.log("i= " + i + "    A[i-1]= " + A[i-1] + "    A[i]= =" + A[i] + "   counter= " + counter);

        }
        if(counter % 2 != 0){
            //If counter it starts evaluating anoter number and counter is
            //unpaired, then, the umpaired value es the last one
            counter++;
            unpaired = A[i+1];
            //No need to continue iterating
            break;
        }
    }

    if (unpaired == 0){
        //If end of array reached, then, the umpaired value is the last one
        unpaired = A[A.length-1];
        console.log("Todos los valores estaban en cantidad par excepto el último");
    }
    console.log("Counter= " + counter);
    return unpaired;

};



retorno = solution(C);



