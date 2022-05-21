/*
primitivos - string, number, boolean, undefined, null (bigint, symbol) #imutáveis (valores copiados)
*/
/*let nome = 'luiz';
nome[0]='R';
console.log(nome[0], nome);*/

//sting é imutavel e o indice exibido continua sendo o 'L'

// Referência (mutável) - array, object, function (valores passdos por referência)

/*let a = [1, 2, 3];
let b = [...a]; // agora com esse código ele literalmente copiou tudo para B 
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(b);

a.push('luiza');
console.log(c);*/


/*const a ={
  nome:'Luiza',
  sobrenome: 'Souza'
};
const b = a;
console.log(b);
*/

const a ={
    nome:'Luiza',
    sobrenome: 'Souza'
  };
  const b = {...a};
  a.nome ='joão';
  console.log(b);
  console.log(a);