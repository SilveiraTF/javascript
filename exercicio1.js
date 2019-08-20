function calcula1() {
    var i;
    var numero = [];
    var np = [];
    var ni = []; // np= numero par/ ni= numero impar/ tnp= todos numeros pares/ tni= todos os numeros impares
    for (i = 0; i <= 5; i++) {
        numero.push (Number(prompt("Informe 6 números:")));

        if (numero[i] %2 == 0) {
            np.push(numero[i]);
        }
        else {
            ni.push(numero[i]);
        }
    }
    alert("números pares:" + np + " quantidade de númeos pares:" + np.length);
        alert("números ímpares:" + ni + " quantidade de númeos ímpares:" + ni.length);
}
