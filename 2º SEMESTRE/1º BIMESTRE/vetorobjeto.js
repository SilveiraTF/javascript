function funcao(){
    //Cria o vetor:
    var vet = []
    //Cria o objeto

    //Cria os produtos
    for(var i = 0; i<5; i++){
        var objeto = {}
        objeto.codigo = Number(prompt("Informe o código: "));
        objeto.nome = prompt("Informe o nome: ");
        objeto.qntd = Number(prompt("Informe a quantidade: "));
        objeto.preco = Number(prompt("Informe o preço: "));
        vet.push(objeto)
        alert("Produto criado com sucesso!")

    }
    var estoque = 0;
    for(i=0;i<5;i++){
        estoque = estoque + vet[i].qntd
    }
    alert("Quantidade em um estoque: " + estoque)
}