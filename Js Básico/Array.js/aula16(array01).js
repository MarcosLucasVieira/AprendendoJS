//                0        1        2          3        4
const alunos = ['Luiz', 'Maria', 'João']; // luiza, eduardo


 console.log(typeof alunos);
 console.log(alunos instanceof Array);

 alunos.push('luiza');
 alunos.push('Eduardo');


delete aluno [1]; // para remover um elemento e não mudar o indice da array
 const removido = alunos.shift();// para remover o primeiro elemento da array
// const removido = alunos.pop(); //para remover o ultimo elemento da array
console.log(removido);


alunos.unshift('luiza'); // Adiciona ao começo
alunos.unshift('Fábio');



alunos.push('Luiza'); // Adiciona no fim.
alunos.push('Fábio');
alunos[alunos.length] = 'Marcos'; 
alunos[alunos.length] = 'luiza';
alunos[alunos.length] = 'fabio';




const nomes ='Luiz Otávio';
console.log(alunos);
console.log(alunos[0]);

alunos [3]= 'luiza'; //adiciona
alunos [0]= 'eduardo'; //altera

