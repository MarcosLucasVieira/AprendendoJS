 /*
 Entre 0 - 11 - Bom dia
 Entre 12 - 17 - Boa tarde
 Entre 18 - 23 - Boa noite
 */
 // If pode ser usado sozinho
 // sempre que utilizo a palavra else, preciso de um if antes.
 // Eu posso ter vários else if´s na checagem 
 // só posso ter um else na checagem
 // podemos usar condições sem else if,utilizando  apenas if e else


 const hora = 50;

 if (hora >= 0 && hora <= 11 ){
     console.log('Bom dia');
 }  else if (hora >=12 && hora <= 17){
     console.log('Boa tarde');
 }  else if (hora >= 18 && hora <= 23 ){
     console.log('Boa noite');
 }  else {
     console.log('olá');
 }

 const tenhoGrana = NaN;
 if (tenhoGrana){
     console.log('vou sair de casa');
 } else {
    console.log ('não vou sair de casa');
}