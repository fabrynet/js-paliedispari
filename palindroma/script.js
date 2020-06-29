// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var btn = document.getElementById('btn');
var result = document.getElementById('result');


btn.addEventListener('click',function(){

  var string = document.getElementById('string').value;

  // richiamo la funzione "palindroma" per verificare se è palindroma
  var risultatoPalindroma = palindroma(string);

  if (risultatoPalindroma ) {
    result.innerHTML = "La parola è palindroma."
  } else {
     result.innerHTML = "La parola non è palindroma."
  }

});

// Funzioni
function palindroma(string) {
  var stringInverted = "";
  for (var i = string.length -1; i >= 0; i--) {
    stringInverted += string[i];
  }
  if (string == stringInverted) {
    return true;
  } else {
    return false;
  }
}
