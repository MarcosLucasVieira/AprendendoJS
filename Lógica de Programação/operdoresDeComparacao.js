/* 
Operadores de comparação
> Maior que
>= Maior que ou igual a 
< Menor que
<= Menor que ou igual a
== igualdade (valor) não recomendavel
=== Igualdade estrita(valor e tipo)
!= Diferente (valor) não recomendavel
!== Diferente (valor e tipo)
*/

const comp = 10 > 5; //> Maior que
console.log(comp);

const comp2 = 10 >=5; // o valor é verdadeiro porque uma das condições é verdadera, caso ad duas deem false exemplo 10>= 11
console.log(comp2);

const comp3 = 10 <11; //< Menor que
console.log(comp3);

const comp4 = 10 <= 11; // <= Menor que ou igual a
console.log(comp4);

/*const num1 = 10; // number
const num2 = '10'; // string
const comp5 = num1 == num2; // ele igualou um number com um string e retornou true mas isto não é certo, por isso não usamos esse operador "=="
console.log(comp5);*/


/*const num3 = 10; // number
const num4 = '10'; // string
const comp6 = num3 === num4;
console.log(comp6);*/

const num = 10;
const num6 = '10';// ele igualou um number com um string e retornou true mas isto não é certo, por isso não usamos esse operador "!="
const comp6 = num != num6;
console.log(comp6);


const num1 = 10;
const num2 = '10';
const comp5 = num1 !== num2;
console.log(comp5);