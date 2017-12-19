//Acá escribe tu código

//Pa;rámetros
var A = []
A = [3, 1, 2, 4, 3];//A.length = 5

function solution(A){
    var minDiff = 0;
    var firstTime = true

    //for (var i = 1 ; i < A.length ; i++){
    for (var i = 1 ; i < A.length-1 ; i++){
        var p1;
        var p2;
        var sumP1 = 0;
        var sumP2 = 0;
        p1 = A.slice(0, i)
        p2 = A.slice(i, A.length);

        console.log("p1 = " + p1 + "   p2 = " + p2); console.log("p1.length = " + p1.length + "   p2.length = " + p2.length)// 1   4

        for(var i = 0 ; i < p1.length ; i++){
            if(sumP1 == 0){
                sumP1 = p1[i]; 
            }
            else{
                sumP1 += p1[i];
            };
        };

        for(var i = 0 ; i < p2.length ; i++){
            if(sumP2 == 0){
                sumP2 = p2[i]; 
            }
            else{
                sumP2 += p2[i];
            };
        };

        console.log("sumP1 = "  + sumP1 + "   sumP2 = " + sumP2);// 3   10

        if (firstTime){
            minDiff = Math.abs(sumP1 - sumP2);
            firstTime = false;
            console.log("entró al primer if (firstTime = true)");
            console.log("minDiff = " + minDiff);
        }
        else{
            if(minDiff > Math.abs(sumP1 - sumP2)){
                minDiff = Math.abs(sumP1 - sumP2);
                console.log("entró al segundo if");
            };
       };
        console.log("i = " + i);

    };//acá cierra el for

return minDiff;
};


//retorno = solution(A);
retorno  = solution(A);