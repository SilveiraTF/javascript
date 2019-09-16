function exe2(resposta){
    hr = prompt("Digite o numero de horas")
    min = prompt("Digite o numero de minutos")
    ss = prompt("Digite o numemo de segundos")
    exe2_1(hr,min,ss);
}
function exe21(h,m,s){
    var resposta = hr*3600 + min*60 + ss
    alert("Em segundos da: " + resposta)
}