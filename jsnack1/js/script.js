/* Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
in verde i numeri pari. */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// scorro l'array
for (let i = 0; i < numbers.length; i++) {

    // per ogni numero 
    let number = numbers[i];
    // let evenOrOdd;

    // SE il numero è pari viene inserito nel div verde
    // ALTRIMENTI viene stampato nel div rosso
    if (number % 2 === 0) {
        // evenOrOdd = 'pari'
        document.getElementById('green').innerHTML += number + ' ';
    } else {
        // evenOrOdd = 'dispari'
        document.getElementById('red').innerHTML += number + ' ';
    }
}