function calcula4() {
    var num = [];
    var i;
    var posi = []

    for (i = 0; i < 15; i++) {
        num.push(prompt("Digite 15 números diferentes"));

        if (num[i] == 30) {
            posi.push(i)
        }
    }
    alert("As posições dos vetores para valores iguais a 30 são:"+posi.length);
    i++;
}