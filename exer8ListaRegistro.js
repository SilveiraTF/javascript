function funcao(){
    var estados = []
    cadastroEstado(estados)
    calculaIndice(estados)
    calculaPercentual(estados)
    calculaMedia(estados)
}
function cadastroEstado(estados){
    for (var  i=0; i < 3; i++){
        var objeto = {}
        objeto.nome = prompt("Informe um estado: ")
        objeto.veiculos = Number(prompt("Informe o número de veículos: "))
        objeto.acidentes = Number(prompt("Informe o número de acidentes: "))
        objeto.indice = (objeto.acidentes/objeto.veiculo)*100
        estados.push(objeto)
    }
}
function calculaIndice(estados){
    var maiorIndice = 0
    var maiorEstado = ""
    var menorIndice = 0
    var menorEstado = ""
    for (i = 0; i<3; i++){
        if(estados[i].indice > maiorIndice){
            maiorIndice = estados[i].indice
            maiorEstado = estados[i].nome
        }
        if(estados[i].indice < menorIndice){
            menorIndice = estados[i].indice
            menorEstado = estados[i].nome
        }
    }
    alert(`Maior indice ${maiorIndice} com nome ${maiorEstado}`)
    alert(`Maior indice ${maiorIndice} com nome ${maiorEstado}`)
}
function calculaPercentual(estados){
    var total = 0
    for(var i=0;i<3;i++){
        total = total + estados[i].veiculos
    }
    for(var i=0;i<3;i++){
        alert((estados[i].veiculos/total)*100)
    }
}
function calculaMedia(estados){
    var total1 =0
    for (var i=0;i<3;i++){
        total1 = total1 + estados[i].acidentes
    }
    alert(`Média de acidentes ${total/3}`)
}