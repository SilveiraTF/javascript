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
    for(var i = 0; i<3; i++){
        if ((vet[i].corolho == "C") && (vet[i].altura > 1.60)){
            
        }
    }
}