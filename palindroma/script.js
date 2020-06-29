// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var btn = document.getElementById('btn');
var result = document.getElementById('result');


btn.addEventListener('click',function(){

  var string = document.getElementById('string').value;
  var palindroma = false;

  for (var i = 0; i < string.length; i++) {
    if (string[i] == string[string.length - 1 -i]) {
      palindroma = true;
      console.log(palindroma);
    } else {
      palindroma = false;
      console.log(palindroma);
    }
  }

  if (palindroma) {
    result.innerHTML = "La parola è palindroma."
  } else {
    result.innerHTML = "La parola non è palindroma."
  }

});
