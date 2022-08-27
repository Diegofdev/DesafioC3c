/* Questão 02 - Bhaskara
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 

Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 

Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.

Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”. */

const valor = document.querySelector("#valor");
const valor2 = document.querySelector("#valor2");
const valor3 = document.querySelector("#valor3");
const btn = document.getElementById("calcular");

btn.onclick = () => {
    if(valor.value == ""){
        valor.focus();
        document.getElementById("resultado").innerHTML = "Digite um numero inteiro nas 3 caixas";
    } else if (valor2.value == "") {
        valor2.focus();
        document.getElementById("resultado").innerHTML = "Digite um numero inteiro nas 3 caixas";
    } else if (valor3.value == ""){
        valor3.focus();
        document.getElementById("resultado").innerHTML = "Digite um numero inteiro nas 3 caixas";
    } else {
        document.getElementById("resultado").innerHTML = "O Resultado é: " + bhaskara(valor.value, valor2.value, valor3.value);
    }
}

const bhaskara = (ax2, bx, c) => {
    let res = [];
    let delta = (bx ** 2) - (4 * ax2 * c);
    if (delta < 0) {
        return "Delta é negativo";
    }
    let x1 = (-bx + Math.sqrt(delta)) / 2 * ax2;
    let x2 = (-bx - Math.sqrt(delta)) / 2 * ax2;
    res.push(x1);
    res.push(x2);
    return res.join(', ');
}

console.log(bhaskara(1, 12, -13));
console.log(bhaskara(3, -5, 12));
console.log(bhaskara(1, -6, 9));