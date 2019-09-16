function exe3() {
    let i;
    var p1 = prompt("Digite uma palavra: ");
    var p2 = prompt("Digite uma palavra: ");

    comparação(p1, p2)

    function comparação(p1, p2) {
        for (i = 0; i < 1; i++) {
            if (p1 == p2) {
                alert("Palavras iguais, 0")
            }
            else {
                alert("Palavras diferentes")
            }
        }
    }
}