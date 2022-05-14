let num1 = 0.7; //number
let num2 = 0.1 //number

num1 += num2; //num1 = num1 + num2

num1 = parseFloat(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));




//console.log(num1.toString()+num2); para modificar um number para string e concatena com outro number
//num1= num1.toString(); para só mudar para string
 //console.log(num1.toString(2)); representação binária
//console.log(num1.toFixed(2)); para só mostra N numeros depois da virgula.
//console.log(Number.isInteger(num1)); para saber se o numero é inteiro.

/*let temp = num1 * 'NaN';
console.log(Number.isNaN(temp));
 (para saber se é um numero ou não)
 #NÃO É UMA BOA PRÁTICA DE PROGRAMAÇÃO!!!
*/

