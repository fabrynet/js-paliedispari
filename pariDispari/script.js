// calcola la somma e la media dei primi 10 numeri

var btn = document.getElementById('btn');


btn.addEventListener('click',function(){

  var result = document.getElementById('result');
  var sum = 0;
  var media;
  var num;
  for (var i = 1; i <= 10; i++) {
    num = parseInt(prompt("Inserisci il " + i + " numero"));
    sum += num;
  }
  
  // numbers = [1,2,3,4,5,6,7,8,9,10];
  // for (var i = 0; i < numbers.length; i++) {
  //     sum += numbers[i];
  //   }

  media = sum / 10;
  result.innerHTML = "La somma è: " + sum + "<br>";
  result.innerHTML += "La media è: " + media;

});
