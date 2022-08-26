function criarArray(num){
    num = num;
    var contador = [];
    for (let index = 1; index <= num; index++) {
        if (index % 5 == 0 && index % 9 == 0) {
            contador[index-1] = "LuidyMoura";
        } else if (index % 9 == 0 && index % 5 != 0) {
            contador[index-1] = "Moura";
        } else if (index % 5 == 0 && index % 9 != 0) {
            contador[index-1] = "Luidy";
        } else {
            contador[index-1] = index;
        }
        
    }
    return contador;
}


console.log(criarArray(45));