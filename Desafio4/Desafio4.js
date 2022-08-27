const valor = document.querySelector("#valor");
const btn = document.getElementById("calcular");

btn.onclick = () => {
    if(valor.value == ""){
        valor.focus();
        document.getElementById("resultado").innerHTML = "Digite um numero inteiro";
    } else {
        document.getElementById("resultado").innerHTML = criarArray(valor.value);
    }
}

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
    return contador.join(', ');
}


