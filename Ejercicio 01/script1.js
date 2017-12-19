var arreglo = [-1, 3, -4, 5, 1, -6, 2, 1];

var retorno = (function (){
    var equilibrio;
    var vectorDeResultados = [];

    for (var i = 1; i < arreglo.length; i++){            

        function sumarAnteriores(i){
            var ant = 0;
                if(i != 0) {
                    for (var j = 0; j < i; j++){
                    ant += arreglo[j];                    
                }
            }                
            return ant;
            };
        var anteriores  = sumarAnteriores(i);                

        function sumarPosteriores(i){
                var post = 0;
                if( !(i == (arreglo.length - 1)) ){
                    for (var k = i+1; k < arreglo.length; k++){
                    post += arreglo[k];
                }
            }                
            return post;
            };
        var posteriores = sumarPosteriores(i);

        if(anteriores == posteriores){
            // if (vectorDeResultados.length == 0){
            //     vectorDeResultados.push(-1);
            // }            
            vectorDeResultados.push(i);
        }               
    };
    return vectorDeResultados;    
})();





