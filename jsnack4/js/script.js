/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

// creo un array vuoto all'interno del quale andranno i numeri dispari
const oddNumbers = [];

// faccio ripetere la domanda all'utente per 6 volte (i < 6)
for (let i = 0; i < 6; i++) {

    // chiedo all'utente un numero
    userNumber = parseInt( prompt('dimmi un numero') );

    // SE il numero è dispari lo aggiungo all'array vuoto
    if (userNumber % 2 !== 0) {
        oddNumbers.push(userNumber)
    }

    // stampo in console l'array di numeri dispari
    console.log('oddNumbers', oddNumbers)
}
   
        
    

