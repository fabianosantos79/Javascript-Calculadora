const result = document.querySelector('.resultado');
//const botao = document.querySelector('.botao');


function clickButton(valor){
    result.innerHTML += valor;
}

function clean() {
    result.innerHTML = '&nbsp';
}

function reduzir() {
    if(result.textContent){
        let resultado = document.querySelector('.resultado').innerHTML;
        result.innerHTML = resultado.substring(0, resultado.length -1);
    }
}

function calcular() {
    if(result.textContent != 'Erro'){
        document.querySelector('.resultado').innerHTML = eval(result.innerHTML)
    }
}