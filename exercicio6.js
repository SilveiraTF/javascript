//function cadastra() {
  //  let vendas = [];
  //  let comissoes = [];
  //  let nomes = [];
  //  let valores = [];
   // vendas.push(document.getElementById("venda").value);
   // comissoes.push(document.getElementById("comissao").value);
   // nomes.push(document.getElementById("nome").value);
   // document.getElementById("saida").innerHTML = "Inserido com sucesso"
//}
//function relatorio() {
    //var i = 0;
   // for (i = 0; i < vendas.length; i++) {
   //     valores.push(vendas[i] * comissoes[i] / 100);
   // }
 //   var aux = " "
  //  for (i = 0; i < vendas.length; i++) {
   //     aux = aux + "<br/>" + nomes[i] + "receberá" + valores[i];
   // }
   // document.getElementById("saida").innerHTML = aux;
//}
//function totalVendas() {
    //var total = 0;
    //var i;
  //  for (i = 0; i < vendas.length; i++) {
  //      total = total + vendas[i];
  //  }
   // document.getElementById("saida").innerHTML = "Total" + total
//}
//function maiorVenda() {
 //   var maior = valores[0];
  //  var posicao = 0;
  //  var i;
   // for (i = 1; i < vendas.length; i++) {
    //    if (valores[i] > maior) {
    //        maior = valores[i];
    //        posicao = i
   //     }
   // }
  //  document.getElementById("saida").innerHTML = nomes[posicao];
//}]

//function menorVenda() {
 //   var menor = valores[0];
  //  var posicao = 0;
   // var i;
  //  for (i = 1; i < vendas.length; i++) {
   //     if (valores[i] < menor) {
   //         menor = valores[i];
    //        posicao = i
    //    }
    //}
   
    

function cadastra6(){
    // declaração dos vetores
    var nomes = []
    var vendas = []
    var comissoes = []
    // entrada de dados
    for ( var i = 0 ; i < 5 ; i ++ ) {
        nomes . push ( prompt ( " Informe nome " ))
        vendas . push ( Number ( prompt ( " Relatório o total de vendas " )))
        comissoes . push ( Number ( prompt ( " Informe comissão " )))
    }
    // processamento
    var chamada = []
    for ( var i = 0 ; i < 5 ; i ++ ) {
        receber . push (vendas [i] * comissoes [i] /  100 )
    }
    alert (nomes +  " \ n "  + receber)
    alert (nomes +  " \ n "  + vendas)
    var maior = receber [0]
    var menor = receber [0]
    var nomeMaior = nomes[0]
    var nomeMenor = nomes[0]
    for ( var i = 0 ; i < 5 ; i ++ ) {
       if (receber [i] > maior) {
           maior = receber [i]
           nomeMaior = nomes [i];
       }
       if (receber [i] < menor) {
           menor = receber [i]
           nomeMenor = nomes [i];
       }
    }
    alert ( " Maior valor digitado "  + nomeMaior +  " - "  + maior)
    alert ( " Menor valor "  + nomeMenor +  " - "  + menor)
}