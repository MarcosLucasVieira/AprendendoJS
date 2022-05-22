
// se (numero >= 0 && numero <= 5) ocorrer, faça isso {codigo}
// se não faça isso {o codgio}
// a partir do momento que a engine do js encontrar uma condição verdadeira ela sera executada e o bloco de código será terminado

const numero = 10;

if (numero >= 0 && numero <= 5){
    console.log('O numero está entre 0 e 5.');
}   else if (numero>= 6 && numero <= 8){
    console.log('O Numero esta entre 6 e 8');
}   else if (1 === 1){ // verdadeira
  console.log('literal');
}   else if (numero >= 9 && numero <= 11){ // verdadeira s
    console.log('O numero está entre 9 e 11.');
}   else{
     console.log('o numero não está entre 0 e 11.');
}
console.log('...aqui vai o resto do código.');