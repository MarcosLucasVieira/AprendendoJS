/*
O seu numero é: 55.1987555
Seu número - 2 é 57.1987555

A raiz Quadrada : 7.429586495895986

É NaN ? false

Arredondado para baixo: 55

Arrendondado para cima: 56

com duas casas decimais: 55.20
*/



const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> Seu número - 2 é ${numero + 2} </p>`;
texto.innerHTML += `<p> A raiz Quadrada : ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p> É NaN ? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isSafeInteger(numero)}</p>`;
texto.innerHTML += `<p> Arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p> Arrendondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p> com duas casas decimais: ${numero.toFixed(2)}</p>`;



