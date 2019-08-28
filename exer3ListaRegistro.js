function funcao(){
    //Cria o vetor:
    var vet = []
    for(var i = 0; i<3; i++){
        var objeto = {}
        objeto.sexo = prompt("Informe o sexo: ");
        objeto.idade = Number(prompt("Informe a idade: "));
        objeto.altura = Number(prompt("Informe a altura: "));
        objeto.corolho = prompt("Informe a cor dos olhos (A- Azul, C- Castanho ou V- Verde): ");
        vet.push(objeto)

    }
    var somaIdade = 0
    var mediaIdade = 0
    var maiorIdade = 0
    var contM = 0
    var qntF = 0
    for(var i = 0; i<3; i++){
        if ((vet[i].corolho == "C") && (vet[i].altura > 1.60)){
            somaIdade = somaIdade + vet[i].idade
        }
        if (vet[i].idade > maiorIdade){
            maiorIdade = vet[i].idade
        }
        if ((vet[i].sexo =="F")&&(vet[i].idade > 20)&&(vet[i].idade <45) ||(vet[i].corolho == "V")&&(vet[i].altura < 1.70)){
            qntF++
        }
        if (vet[i].sexo=="M"){
            contM++
        }
    }

    mediaIdade = somaIdade/i
    alert(mediaIdade)
    alert(maiorIdade)
    alert(qntF)
    alert(contM/i*100)
}