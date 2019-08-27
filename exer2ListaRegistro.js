function funcao(){
    //Cria o vetor:
    var vet = []
    var soma = 0
    for(var i = 0; i<3; i++){
        var objeto = {}
        objeto.salario = Number(prompt("Informe o salário: "));
        objeto.idade = Number(prompt("Informe a idade: "));
        objeto.numf = Number(prompt("Informe o número de filhos: "));
        objeto.sexo = prompt("Informe o sexo: ");
        vet.push(objeto)

    }
    var mediaS = 0
    var mediaF = 0
    var somaSalario = 0
    var somaFilho = 0
    var maiorSalario = vet[0].salario
    var qntd = 0;

    for(var i = 0; i<vet.length; i++){
        somaSalario = somaSalario + vet[i].salario
        somaFilho = somaFilho + vet[i].numf
        

        if (vet[i].salario > maiorSalario){
            maiorSalario = vet[i].salario
        }
        if (((vet[i].sexo == "F") && (vet[i].sexo == "f")) && (vet[i].salario > 1000)){
            qntd++;
        }
    }
    mediaF = somaFilho/i
    mediaS = somaSalario/i
    alert(mediaS)
    alert(mediaF)
    alert(maiorSalario)
    alert(qntd/3*100);
}