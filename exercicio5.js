function calcula5(){
    let linguagemp = [];
    let logicap = [];

    for(let i=0;i<10;i++){
        logicap.push(Number(prompt("Código do aluno:")));
        
    }
    for(let i=0;i<5;i++){
        linguagemp.push(Number(prompt("Código do aluno  : ")));
    }

    var interseccao = [];
    for(let i=0;i<10;i++){
        if(linguagemp.indexOf(logicap[i]) != -1) {
            interseccao.push(logicap[i])
        }
    }
    alert(interseccao)
}