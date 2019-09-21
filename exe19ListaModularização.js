function exe19() {
    var vet1 = []
    var vet2 = []
    intersec(vet1, vet2)
    for (var i = 0; i < 4; i++) {
        vet1.push(Number(prompt("Digite 4 números: ")))
    }
    for (var j = 0; j < 4; j++) {
        vet2.push(Number(prompt("Digite outros 4 números: ")))
    }

    alert(intersec(vet1, vet2))
}
function intersec(vet1, vet2) {
    var vet3 = []
    for (var i = 0; i < vet1.lenth; i++) {
        for (var j = 0; j < vet2.lenth; j++) {
            if (vet1[i] == vet2[j]) {
                vet3.push(vet1[i])
            }
        }
    }
    return vet3
}