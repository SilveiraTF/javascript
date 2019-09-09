function calcula(){
    var mensagem = "Digite uma opção \n " + 
    "1. Cadastrar vendedor \n 2. Cadastrar venda \n " +
    "3. Consultar vendas funcionário em um mês \n " +
    "4. Consulta total vendas de vendedor \n" + 
    "5. Mostrar o número do vendedor que mais vendeu em um mês \n" +
    "6. Mostrar o número do mês com mais vendas \n" + 
    "7. Sair ";
    var opcao;
    var vendas = []; 
    var vendedores = [];
    do {
        opcao = Number(prompt(mensagem))
        switch(opcao){
            case 1: var objeto = {};
                    objeto.codigo = Number(prompt("Código"))
                    objeto.nome = prompt("Nome")
                    vendedores.push(objeto)
                    break;
            case 2: var objeto = {};
                    var cola = "";
                    for(var i=0; i<vendedores.length; i++){
                        cola = cola + vendedores[i].codigo + " " + vendedores[i].nome + "\n"
                    } 
                    objeto.codigo = Number(prompt("Código Funcionário \n" + cola))
                    objeto.valor = Number(prompt("Valor"))
                    objeto.mes = Number(prompt("Mês"))
                    vendas.push(objeto) 
                    break;
            case 3:  var cola = "";
                    for(var i=0; i<vendedores.length; i++){
                        cola = cola + vendedores[i].codigo + " " + vendedores[i].nome + "\n"
                    }    
                    var cod = Number(prompt("Código \n" + cola))
                    var mes = Number(prompt("Mês"))
                    for(var i=0;i<vendas.length;i++){
                        if ((vendas[i].codigo == cod) && 
                           (vendas[i].mes == mes)){
                               alert(vendas[i].valor)
                               break;
                           }
                    }
                    if(i == vendas.length){
                        alert("Essa venda não existe ou não foi cadastrada")
                    }
                    break;
            case 4: var cola = ""
                    for(i=0; i<vendedores.length; i++){
                        cola = cola + vendedores[i].codigo + " " + vendedores[i].nome + "\n"
                    }
                    var cod = Number(prompt("Código" + "\n" + cola))
                    var soma = 0;
                    for(var i=0; i<vendas.length; i++){
                        if(vendas[i].codigo == cod){
                          soma = soma + vendas[i].valor;
                        }
                    }
                    alert("A soma das vendas é " + soma);
                    break;
            case 5: var mes = Number(prompt("Informe o mês desejado "));
                    var codM = 0;
                    var codigo = 0;
                    for(i=0; i<vendas.length; i++){
                        if((mes == vendas[i].mes) && (vendas[i].valor > codM )){
                            codM = vendas[i].valor
                            codigo = vendas[i].codigo
                        }
                    }
                    alert("Código do vendedor que mais vendeu em um mês: " + codigo);
                    break;
            case 6: var meses = [0,0,0,0,0,0,0,0,0,0,0,0]
                    for(var i=0; i<vendas.length; i++){
                        meses[vendas[i].mes-1] = meses[vendas[i].mes-1] + vendas[i].valor
                    }
                    var maior = 0;
                    var mesMaior = 0;
                    for(var i=0; meses.length; i++){
                        if(meses[i] > maior){
                            maior = meses[i]
                            mesMaior = i+1
                        }
                    }
                    alert(mesMaior);
                    break;
            case 7: alert("Obrigado por usar o programa"); break;
            default: alert("Opção inválida");
        }
    }
    while (opcao != 7);
}