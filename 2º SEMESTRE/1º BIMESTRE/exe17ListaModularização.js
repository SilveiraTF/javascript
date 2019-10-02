function exe17(vetor){
    for(let i = 0; i < vet.length; i++){
        if(vet[i] < 0){
            vet[i] = 0
        }
    }
    return vet;
}
let v = [-1,2,-3,55,-5]
console.log(exe17(v))