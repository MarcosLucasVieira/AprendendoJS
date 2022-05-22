/*console.log('luiz otávio' && 0 && 'maria'); // retornará o valor false, neste caso o unico number
console.log('luiz otávio' && true && 'maria'); // quando tudo for true retornará o ultimo valor true
console.log('luiz otávio' && true && NaN); // retornara o falor false*/

/* FALSY 
*FALSE (qualquer coisa diferente destes abaixo é avaliado em ture)
0 -> zero é avaliado como false
'' "" `` -> uma string vazia
null / undefined
NaN
*/

/*function falaOi(){
    return 'oi';
}

const vaiExecutar ='asndujda';
console.log(vaiExecutar && falaOi());*/

console.log(0 || false || null|| 'asdiuadha' || true); // retornará o primmeiro valor verdadeiro

/*const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);*/

const a = 0;
const b = null;
const c = 'false'; // Aqui é uma string e é avaliado como verdadeiro
const d = false;
const e = NaN;

console.log(a|| b ||' joão '|| c || d || e);

