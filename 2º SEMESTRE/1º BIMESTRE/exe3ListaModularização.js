function exe3() {
    var n1 = prompt("Digite um nome: ");
    var n2 = prompt("Digite outro nome: ");
    var resultado = exe3_3(n1, n2);
    function exe3_3(n1, n2) {
        if (n1 == n2) {
            return 0
        }
        else {
            for (var i = 0; i < n1.lenght; i++) {
                if (n1[i] != n2[i]) {
                    return i + 1;
                }
            }
        }
    }
}