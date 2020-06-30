// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var btn = document.getElementById('btn');
var result = document.getElementById('result');

btn.addEventListener('click',function(){

  var scommessa = document.getElementById('scommessa').value;
  var number = parseInt(document.getElementById('number').value);

  if (scommessa=="pari" || scommessa=="dispari") {
    if (number && number>=1 && number<=5) {
      var randomCPU = getRandomIntInclusive(1,5);
      console.log(randomCPU);
      var sum = number + randomCPU;
      console.log(sum);

      if (isPari(sum)) {
        var pariDispari = "pari";
      } else {
        var pariDispari = "dispari";
      }

      if (pariDispari == scommessa) {
        result.innerHTML = "Hai vinto! E' uscito: " + sum + " (" + pariDispari + ")";
      } else {
        result.innerHTML = "Mi dispiace hai perso, è uscito: " + sum + " (" + pariDispari + ")";
      }
    } else {
      result.innerHTML = "Attenzione, inserisci un numero da 1 a 5";
    }
  } else {
    result.innerHTML = "Attenzione, inserisci 'pari' o 'dispari'";
  }

});

// Funzioni
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
function isPari(num) {
  if (num%2) {
    return false;
  } else {
    return true;
  }
}
