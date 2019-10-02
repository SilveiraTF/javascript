function exe20() {
    var vet = []
    leitura(vet)
    mediaSalarial(vet)
    mediaFilhos(vet)
    maiorSalario(vet)
    percentualSalario(vet)
}
function leitura(vet) {
    do {
        var objeto = {}
        objeto.salario = Number(prompt("Digite seu salário: "))
        objeto.nfilhos = Number(prompt("Quantos filhos você tem? "))
        vet.push(objeto)
        var opcao = prompt("Quer continuar? S/N")
    }
    while (opcao != 'N');
}

function mediaSalarial(vet) {
    var somaS = 0
    for (var i = 0; i < vet.length; i++) {
        somaS = somaS + vet[i].salario
    }
    alert(`A média é de: ${somaS / vet.length}`)

}
function mediaFilhos(vet) {
    var somaF = 0
    var mediaF = 0
    for (var i = 0; i < vet.length; i++) {
        somaF = somaF + vet[i].nfilhos
    }
    alert(`A média de filhos é de: ${somaF / vet.length}`)
}
function maiorSalario(vet) {
    var maiorS = vet[0].salario
    for (var i = 0; i < vet.length; i++) {
        if (vet[i].salario > maiorS) {
            maiorS = vet[i].salario
        }
    }
    alert("O maior salário é: " + maiorS)
}
function percentualSalario(vet) {
    var somaP = 0
    for (var i = 0; i < vet.length; i++) {
        if (vet[i].salario <= 350) {
            somaP = somaP + vet[i].salario
        }
    }
    alert(`Percentual é: ${(somaP * 100) / vet.length}`)
}