function funcao(){
    //Cria o vetor:
    var vet = []
    for(var i = 0; i<5; i++){
        var objeto = {}
        objeto.sexo = prompt("Informe o sexo: ");
        objeto.idade = Number(prompt("Informe a idade: "));
        objeto.rendafamiliar = Number(prompt("Informe a renda familiar: "));
        objeto.numerodefilhos = Number(prompt("Informe a quantidade de filhos: "));
        vet.push(objeto)

    }
    var somaSalarioH = 0
    var mediaSalarioH = 0
    var maiorIdade = 0
    var menorIdade = 0
    var qntF = 0
    for(var i = 0; i<5; i++){
        somaSalarioH = somaSalarioH + vet[i].rendafamiliar


        if (vet[i].idade > maiorIdade){
            maiorIdade = vet[i].idade
        
        }
        if (vet[i].idade < menorIdade){
            menorIdade = vet[i].idade
        }

        if ((vet[i].sexo =="F")&&(vet[i].numerodefilhos >= 2)&&(vet[i].rendafamiliar <600)){
            qntF
        }
    }

    mediaSalarioH = somaSalarioH/i
    alert(mediaSalarioH)
    alert(maiorIdade)
    alert(menorIdade)
    alert(qntF)
}