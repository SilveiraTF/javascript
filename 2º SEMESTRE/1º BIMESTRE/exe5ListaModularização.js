function exe5() {
    var n1 = prompt("Informe um valor")
    var resultado = exe5_5(n1)
    alert(resultado)
}
function exe5_5(n1) {
    return (n1 >= 0) ? "positivo" : "negativo"
}