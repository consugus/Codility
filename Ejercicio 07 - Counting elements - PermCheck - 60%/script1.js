//Acá escribe tu código
var A = [4, 1, 3, 2];   //1, OK
var B = [4, 1, 3];      //0, OK
var C = [2, 5, 4, 1];   //0, OK
var D = [2, 5, 4, 1, 3];//1, OK
var E = [1];            //1, OK
var F = [2];            //0, OK
var G = [1, 1];         //0, OK

function encontrarPermutacion(A){    
    console.log(A.length);
    //Verificamos los arrays de longitud nula o 1
    if(A.lenth == 0 ){
        return 1;
    };

    if(A.length == 1 && A[0] != 1){
        return 0
    };
    desde = 1;
    hasta = Math.max(...A);
    console.log("desde= " + desde + "   hasta= " + hasta);

    if(hasta < A.length){
        return 0;        
    };


    for (var i = desde; i < hasta; i++){
        console.log("i= " + i + "   incluído= " + A.includes(i));
        if(!A.includes(i)){
            return 0;            
        }
    };
    return 1;
}
retorno = encontrarPermutacion(B);