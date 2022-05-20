const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade:25,

    fala () {
        console.log(`A minha idade atual é ${this.idade}.`);
    },
    incrementAge(){
       this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementAge();
pessoa1.fala();






/*function criaPessoa (nome,sobrenome,idade){ //para criar uma function para criar um objeto e adicionar argumentos.
    return {nome,sobrenome,idade};
}

const pessoa1 = criaPessoa('luiz','otávio', 25);
const pessoa2 = criaPessoa('Marcos Lucas','Vieira', 23);
const pessoa3 = criaPessoa('Vinicius','otávio', 31);
const pessoa4 = criaPessoa('Luiza','Souza', 18);
const pessoa5 = criaPessoa('Juliana','Miranda', 22);


console.log(pessoa1.nome,pessoa2.nome,pessoa3.nome);*/
 

/*const pessoal1 = { //para criar um objeto usamos esse molde.
   nome: 'luiz',
   sobrenome: 'mirana',
   idade: 25

};*/