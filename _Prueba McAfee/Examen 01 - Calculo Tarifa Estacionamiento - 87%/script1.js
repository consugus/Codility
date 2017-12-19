//Acá escribe tu código

var inicio1 = "10:00";
var fin1 = "13:21";

var inicio2 = "09:42";
var fin2 = "11:42";


function solucion1(E, L){
var horaInicio = parseInt(extraerHora(E));
var minutoInicio = (parseInt(extraerMinutos(E)))/60;
var horaFin = parseInt(extraerHora(L));
var minutoFin = (parseInt(extraerMinutos(L)))/60;
var hmInicio = horaInicio + minutoInicio;
var hmFin = horaFin + minutoFin;
var tiempoEstadia = Math.ceil(hmFin - hmInicio);
var tarifa;
if(tiempoEstadia > 1){
    tarifa = 2 + 3 + (tiempoEstadia-1) * 4
}
else{
    tarifa = 2 + 3;
};


return tarifa;
};


function extraerHora(str1){
    var hora = 0;    
        if(str1[0] == "0"){
            hora = str1[1]            
        }
        else{
            hora = str1[0] + str1[1]            
        };
        return hora;   
};

function extraerMinutos(str2){
    var minutos = 0;
        if(str2[3] == "0"){
            minutos = str2[4]            
        }
        else{
            minutos = str2[3] + str2[4]            
        };
        return minutos;   
};



retorno = solucion1(inicio1, fin1);