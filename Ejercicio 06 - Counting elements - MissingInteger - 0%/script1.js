//Acá escribe tu código
var A = [1, 3, 6, 4, 1, 2];
var B = [1];


function findTheMissing(A){

    Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0});


    if(A.length == 0 || A.length == 1){
        return 0;
    };    
    
    ASorted = A.sort();
    ASortedUnique = ASorted.unique();
    var desde = ASortedUnique[0];     
    var hasta = ASortedUnique[ASortedUnique.length-1];    
    
    for(var i = desde ; i < hasta; i++){
        if(!ASortedUnique.includes(i)){
            return i;
        }
    }
    return 0;

}




var retorno = findTheMissing(A);