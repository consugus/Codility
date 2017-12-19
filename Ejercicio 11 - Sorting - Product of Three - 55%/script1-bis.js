//Acá escribe tu código

var A = [];
A = [-3, 1, 2, -2, 5, 6];
B = [-3, 1, 2];
C = [-5, 5, -5, 4];

function productOfThree(A){
    if (A.length < 3){
        //hacer algo cuando no hay al menos tres elementos
    };

    ASorted = A.sort();
    var firstTime = true;
    maxProduct = 0;

    console.log("Longitud del vector= " + ASorted.length);

    //Eliminar Duplicados    
    // for (var i = 0 ; i < ASorted.length -1 ; i++){
    //     if(ASorted[1] == ASorted[i+1]){
    //         ASorted.splice(i, 1);
    //     };
    // };
    // console.log("Longitud del vector= " + ASorted.length);




    for (var i = 0 ; i < A.length -2 ; i++){
        var product = ASorted[i]*ASorted[i+1]*ASorted[i+2];
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
    console.log("ASorted = " + ASorted);
    return maxProduct;
};





retorno = productOfThree(C);