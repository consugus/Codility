//Acá escribe tu código

var S1 = "{[()()]}";            // 1, OK
var S2 = "(";                   // 0, OK
var S3 = "([)()]";              // 0, OK
var S4 = "[(])";                // 0, OK
var S5 = "({{({}[]{})}}[]{})";  // 1, OK

function properlyNested(S){
    var keys = 0;// 1
    var brackets = 0;// 2
    var parenthesis = 0;// 3
    var pila = [];

    for (var i = 0 ; i < S.length ; i++){
        switch (S[i]) {
            case "{":
                pila.push(1);
                keys +=1;
                break;

            case "}":
                if(pila[pila.length-1] != 1){
                    return 0;
                };
                pila.pop();
                keys -=1;
                break;

            case "[":
                pila.push(2);
                brackets +=1;
                break;

            case "]":
                if(pila[pila.length-1] != 2){
                    return 0;
                };
                pila.pop();
                brackets -=1;
                break;

            case "(":
                pila.push(3);
                parenthesis +=1;
                break;

            case ")":
                if(pila[pila.length-1] != 3){
                    return 0;
                };
                pila.pop();
                parenthesis -=1;
                break;

            default :
                break;
        }
    };

    if(keys == 0 && brackets == 0 && parenthesis == 0){
        return 1;
    };

    return 0;
}

retorno = properlyNested(S5);