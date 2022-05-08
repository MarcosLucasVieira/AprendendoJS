/* 
luiza Otávio Miranda tem 30 anos, pesa 84kg 
tem 1.8 de altura e seu imc é de 25.
luiz otávio nasceu em: 1980
*/
const nome= 'Luiz Otávio';
const sobreNome= 'Miranda';
const idade = 42;
const peso = 84;
const alturaEmMe= 1.80;
let anoAtual=2022;
let imc = peso /(alturaEmMe*alturaEmMe);
let anoNasc = anoAtual - idade;

console.log(`${nome} ${sobreNome} tem ${idade} pesa ${peso}kg`);
console.log(`tem ${alturaEmMe} e seu imc é de ${imc}`);console.log(`${nome} nasceu em:${anoNasc}.`);


