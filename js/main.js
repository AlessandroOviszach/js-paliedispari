// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// dichirazione delle variabili
const user_word = prompt('inserisci una parola');
const reverse_word = reverse_func(user_word);

if (reverse_word === user_word) {
    console.log('Parola palindroma');
} else {
    console.log('Parola non palindroma');
}

// funzione di 'reverse' sulla parola passata
function reverse_func(x) {
    const reverse = x.split('').reverse('').join('');

    return reverse;
}