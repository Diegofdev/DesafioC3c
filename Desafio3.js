const nome = document.querySelector("#NomeAluno");
const nota = document.querySelector("#NotaAluno");
const btn = document.getElementById("calcular");

btn.onclick = () => {
    if(nota.value < 0 || nota.value > 100 || nota.value == ""){
        nota.focus();
        document.getElementById("resultado").innerHTML = "A nota precisa ser entre 0 e 100";
    } else {
        document.getElementById("resultado").innerHTML = result(nota.value);
    }
    
}

function result(nota) {
    nota = Number.parseInt(nota);
    let arred = nota % 5;
    
    if(nota < 38){
        return "O aluno " + nome.value + " tirou " + nota + " e está reprovado!"
    } else if (arred == 3){
        nota = nota + 2
        return "O aluno " + nome.value + " tirou " + (nota-2) + " e teve a nota arredondada para " + nota + " e está Aprovado!"
    } else if (arred == 4){
        nota = nota + 1
        return "O aluno " + nome.value + " tirou " + (nota-1) + " e teve a nota arredondada para " + nota + " e está Aprovado!"
    } else {
        return "O aluno " + nome.value + " tirou " + nota + " e está Aprovado!"
    }
}