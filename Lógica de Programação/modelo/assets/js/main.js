/*;

const form = doc
const result = document.querySelector('results');*/
const form = document.getElementById('imc');

form.addEventListener('submit', onsubmit);

function onsubmit(event) {
    event.preventDefault();
    const weight = document.querySelector('.weight').value;
    const height = document.querySelector('.height').value;
    const result = document.querySelector('.results');

    const imc = weight / (height * height);

    let mensagem;

    if (imc < 18.5) {
        mensagem = 'Abaixo do peso';
    } else if (imc < 29.9) {
        mensagem = 'Peso Normal';
    } else if (imc < 34.5) {
        mensagem = 'Sobrepeso';
    } else if (imc < 39.9) {
        mensagem = 'Obesidade Grau 1';
    } else {
        mensagem = 'Obesidade Grau 3';
    }

    result.innerHTML = `<p> Seu IMC é: ${imc.toFixed(1)} (${mensagem})`;
};
