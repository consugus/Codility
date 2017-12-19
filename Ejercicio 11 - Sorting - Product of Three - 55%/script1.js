//Acá escribe tu código

var A = [];
A = [-3, 1, 2, -2, 5, 6];
B = [-3, 1, 2];
C = [-5, 5, -5, 4];

function productOfThree(A){
    if (A.length < 3){
        //hacer algo cuando no hay al menos tres elementos
    };
    
    
    var firstTime = true;
    maxProduct = 0;

    console.log("Longitud del vector= " + A.length);

    var indice1 = -1;
    var indice2 = -1;
    var indice3 = -1;


    for (var i = 0 ; i < A.length - 2 ; i++){
        indice1 = i; 

        for (var j = i  + 1; j < A.length - 1  ; j++){            
            if(A[i] <= A[k]){
                indice2 = j;
                break;
            };

            for (var k = j + 1 ; k < A.length ; k++)

                if(A[j] <= A[k]){
                    indice3 = k;
                    break;
                };                
            };

            console.log("indice1 = " + indice1 + "   indice2 = " + indice2 + "   indice3 = " + indice3);
            if(indice1 != -1 && indice2 != -1 && indice3 != -1){
                var product = A[indice1]*A[indice2]*A[indice3];
            };

        
            if(firstTime){
                maxProduct = product;
                firstTime = false;
            }
            else{
                if(maxProduct < product){
                    maxProduct = product;
                };
            };
        };
    //return "El producto Máximo = " + maxProduct;
    console.log("ASorted = " + A);
    return maxProduct;
};





retorno = productOfThree(C);