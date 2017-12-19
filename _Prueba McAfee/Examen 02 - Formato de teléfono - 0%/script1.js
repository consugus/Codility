//Acá escribe tu código

//Parámetros
var tel1 = "00-44 48 5555 8361";     //-"004-448-555-583-61" - Internacional
var tel2 = "0 - 22 1985 - - 324";    //"022-198-53-24"       - codigo de provincia
var tel3 = "555372654";              //"555-372-654"         - sin cod prov
var tel4 = "1234567";                     //"55"

function solution(str){

    
var s;
var firsTime = true;
//clean the extra characters
for(var i = 0 ; i < str.length ; i++){
    if (str[i] != "-" && str[i] != " "){
        if(firsTime){
            s = str[i];
            firsTime = false;
        }
        else{
            s += str[i];
        };        
    };
};

//Create the string with desired mask
var telConMascara = "";
var c = 0;

console.log(s);
for (var i = 0 ; i < s.length ; i++){    
    if((s.length-i  == 2 & (c == 0))){
        telConMascara = telConMascara +  s[i] + s[i+1];
        console.log("entró al caso 2");
        break;
    };

    if(((s.length-i  == 3) & (c == 0)) ){
        telConMascara = telConMascara +  s[i] + s[i+1] + s[i+2];
        console.log("entró al caso 3");
        break;
    };


    if(((s.length - i) == 4) & (c == 0 | c == 1)){
        telConMascara = telConMascara + s[i] + s[i+1]  + "-" + s[i+2] + s[i + 3];            
        console.log("entró a caso 4-(0 o 3)");
        break;
    };

    if(((s.length - i) == 2 & (c == 2)) ){
        telConMascara = telConMascara + "-" + s[i] + s[i+1];            
        console.log("entró a caso 5-3");
        break;
    };

    if(((s.length - i) == 2) & s.length == 2 ) {        
        telConMascara = telConMascara + "-" + s[i] + s[i+1];  
        console.log("ahora entró acá");
        break; 
    };
    if((telConMascara.length > 0 & c == 3)){
        telConMascara =  telConMascara + "-" + s[i];
        c = 1;
        console.log("i = " + i + "   c = " + c +  "   s.length = " + s.length + " " + telConMascara);
    }
    else{        
        telConMascara += s[i];
        c++;       
        console.log("i = " + i + "   s.length - i = " + (s.length-i) + "   c = " + c +  "   s.length = " + s.length + " " + telConMascara);
    };
};

return telConMascara;
};

retorno = solution(tel4); 