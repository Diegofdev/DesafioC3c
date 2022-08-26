

const lado1 = document.querySelector("#lado1");
const lado2 = document.querySelector("#lado2");
const lado3 = document.querySelector("#lado3");
const btn = document.getElementById("calcular");

btn.onclick = () => {
    if(lado1.value == ""){
        lado1.focus();
    } else if (lado2.value == "") {
        lado2.focus();
    } else if (lado3.value == "") {
        lado3.focus();
    } else {
        document.getElementById("resultado").innerHTML = triangulo(lado1.value, lado2.value, lado3.value);
    }
}


function triangulo(l1, l2, l3){
    l1 = Number.parseInt(l1);
    l2 = Number.parseInt(l2);
    l3 = Number.parseInt(l3);
    
    let res;

    if (l1 == l2 && l1 == l3) {
        res = " O Triângulo é Equilátero";
    } else if (l1 == l2 || l2==l3 || l3==l1){
        res = " O Triângulo é Isosceles";
    } else {
        res = " O Triângulo é escaleno";
    }
    
    return res;
    
}