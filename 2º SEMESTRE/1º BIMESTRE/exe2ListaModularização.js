 function exe2(){
    var hr = Number(prompt("Digite o numero de horas"));
    var min = Number(prompt("Digite o numero de minutos"));
    var ss = Number(prompt("Digite o numemo de segundos"));
    var resultado = exe2_2(hr, min, ss);
    alert(resultado)
}
function exe2_2(hr,min,ss){
    return hr*3600 + min*60 + ss
    
}