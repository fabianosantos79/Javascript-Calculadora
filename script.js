const result = document.querySelector('.resultado');
//const botao = document.querySelector('.botao');


function clickButton(x){
    result.innerHTML += x;
}

function clean() {
    result.innerHTML = '&nbsp';
}

function reduzir() {
    result.innerHTML = result.substring(1, result.length - 1);
}

function calcular() {
    if(result){
        result.innerHTML = eval(result);
    }
}