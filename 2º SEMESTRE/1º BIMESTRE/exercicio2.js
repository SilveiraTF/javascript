function calcula2() {
    var i;
    var num = [];
    var multi2 = [];
    var multi3 = [];
    var multi2e3 = [];
    for (i = 0; i < 7; i++) {
        num.push(prompt("Digite os números:"));

        if (num[i] % 2 == 0) {
            multi2.push(num[i]);
        }
        if (num[i] % 3 == 0) {
            multi3.push(num[i]);
        }
        if((num[i]%2==0)&&(num[i]%3==0)){
            multi2e3.push(num[i]);
        }
    }
       alert("Multiplos de 2: "+multi2);
        alert("Multiplos de 3: "+multi3);
        alert("Multiplos de 2 e 3: "+multi2e3);
}
