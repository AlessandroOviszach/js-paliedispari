// // Palindroma
// // Chiedere all’utente di inserire una parola
// // Creare una funzione per capire se la parola inserita è palindroma

// // dichirazione delle variabili
// const user_word = prompt('inserisci una parola');
// const reverse_word = reverse_func(user_word);

// if (reverse_word === user_word) {
//     console.log('Parola palindroma');
// } else {
//     console.log('Parola non palindroma');
// }

// // funzione di 'reverse' sulla parola passata
// function reverse_func(x) {
//     const reverse = x.split('').reverse('').join('');

//     return reverse;
// }




// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// dichiarazione delle variabili
let user_choice = prompt('inserisci pari o dispari').trim().toLocaleLowerCase();

while ( (user_choice !== 'pari') && (user_choice !== 'dispari') ) {
    user_choice = prompt('valore non valido, riprova! (pari o dispari)').trim().toLocaleLowerCase();
}

// player choice
let user_number = parseInt( prompt('inserisci un numero da 1 a 5') );
console.log('player', user_number);

// computer choice
const computer_number = random_number(1, 5);
console.log('player', user_number);

// addition numbers
const somma = user_number + computer_number;

// check winner
if (user_choice === check_odd_even(somma)) {
    console.log('Vince il giocatore')
} else {
    console.log('Vince il computer')
}

function random_number(x, y) {
    return Math.floor( Math.random() * (y - x + 1) ) + x;
}


function check_odd_even(x) {
    if (x % 2 === 0) {
        return 'pari';
    }

    return 'dispari';
}