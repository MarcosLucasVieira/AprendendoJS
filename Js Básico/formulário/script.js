function myScope() { /* criamos uma função para envolver tudo */
    const form = document.querySelector('.form');
    const results = document.querySelector('.results');
    
    const people=[]; //criamos uma array para receber os dados

    function receiveEventForm (event){ //criamos uma função para pegar esses dados
        event.preventDefault();
        const name = form.querySelector('.name');
        const surname = form.querySelector('.surname');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');
        
        
        people.push({ // adicionando os dados dentro do array
            name: name.value,
            surname: surname.value,
            weight: weight.value,
            height: height.value
        });
        console.log(people); //  mostrando os dados na tela 

        results.innerHTML+=`<p> ${name.value} ${surname.value} ${weight.value} ${height.value} </p>`;// mostrando os dados na tela 
    }
    form.addEventListener('submit', receiveEventForm); 

}

myScope(); //Chamamos a função.