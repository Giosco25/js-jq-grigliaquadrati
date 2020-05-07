// Esercitazione di oggi: Quadratini
// Creare in HTML una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
var numeri_random = genera_random(0,11)
console.log(numeri_random);
// Genero numeri random da 1 a 10
function genera_random(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
$('.quadratini').append(function(){
    numeri_random = genera_random();
});
