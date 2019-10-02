function calcula3() {
    let i;
    let codigo = [];
    let estoque = [];
    let codc;

    for (i = 0; i < 10; i++) {
        codigo.push(Number(prompt("Digite os 10 código de produtos para cadastrá-los: ")));
        estoque.push(Number(prompt("Digite a quantidade a ser inserida no estoque de cada código: ")));
    }

    codc = Number(prompt("Insira um código para o cliente: "));
    while (codc != 0) {
        let codprod = Number(prompt("Informe o código do produto que quer comprar: "));
        let qntprod = Number(prompt("Informe a quantidade que deseja comprar: "));
        let auxPosicao = codigo.indexOf(codprod)
        if (auxPosicao == -1) { // nao existe
            alert("Produto não existe")
        }
        else {
            if (estoque[auxPosicao] = qntprod >= 0) {
                estoque[auxPosicao] = estoque[auxPosicao] - qntprod
                alert("Produto comprado com sucesso!")
            }
            else {
                alert("Não tem estoque!")
            }
        }
        codc = Number(prompt("Informe um novo código para o cliente" +
            "Digite 0 para encerrar"));
    }
}