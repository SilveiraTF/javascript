function exe1(){
    //leitura de dados
    var num1 = Number(prompt("Digite um numero: "));
    //chama a função e atribui o retorno a uma variável resultado
    var resultado = exe1_1(num1);
    //mostra o resultado
    alert(resultado)
    }
function exe1_1(num1){
    var soma = 0;
    //soma dos numeros de 1 a num1
    for(var i=0;i<=num1;i++){
        var soma = soma + i
    }
    return soma
} 