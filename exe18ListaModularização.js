function exe18() {
    let vetor = []
    num = 100
    while(vetor.length < 10){
        let div = []
        for(let i = 1; i <= num; i++){
            if(num % i == 0){
                div.push(i)
            }
        }
        if(div.length == 2){
            vet.push(num)
        }
        num++; 
    }
    return vetor
}
console.log(`Os dez números após o 100 são: ${exe18()}.`)