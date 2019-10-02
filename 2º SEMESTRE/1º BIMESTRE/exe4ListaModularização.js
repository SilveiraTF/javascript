function exe4(resposta){
    raio = Number(prompt("Informe o raio da esfera:"))
    var resultado = exe4_4(raio)
    alert(resultado)
}
function exe4_4(raio){
    return (4*Math.PI*Math.pow(raio,3))/3;
}