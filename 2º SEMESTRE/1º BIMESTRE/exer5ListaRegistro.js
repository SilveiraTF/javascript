function funcao(){
    var vet = []
    for(var i = 0; i<5; i++){
        var objeto = {}
        //Coloca os dados no objeto
        objeto.codigo = Number(prompt("Insira o Código: "))
        objeto.descricao = prompt("Insira a descrição: ")
        objeto.qntd = Number(prompt("Insira a quantidade: "))
        objeto.preco = Number(prompt("Insira o preço do objeto: "))
        //Coloca o objeto no vetor ordenado
        for(var j = 0; j<vet.length; j++){ //varre o  vetor
            if(objeto.codigo < vet[j].codigo){ //procura por um alemento maior || j = posição onde vai colocar o objeto
                vet.splice(j, 0, objeto); //adiciona na posicao j
                alert("Adicionado com sucesso!")
                break; //sai do laço
            }
        }
        if(j== vet.length){
            vet.push(objeto); // caso o numero for maior, o vet.push insere na frente do ultimo numero do vetor
            alert("Adicionado com sucesso!")
        }
    }
    
    var cod = Number(prompt("Informe o código: "))
    for(var i = 0; i<5; i++){
        if(cod == vet[i].codigo){
        vet[i].descricao = prompt("Insira a descrição: ")
        vet[i].qntd = Number(prompt("Insira a quantidade: "))
        vet[i].preco = Number(prompt("Insira o preço do objeto: "))
        break;
        }
    }
    if(i == 5){
        alert("Produto não existe!")
    }

    for(var i = 0; i<vet.length; i++){ //postra o vetor
    alert(vet[i].codigo +" "+ vet[i].descricao+" "+vet[i].qntd+" "+ vet[i].preco)
    }

}