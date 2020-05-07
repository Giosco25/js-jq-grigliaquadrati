// Esercitazione di oggi: Quadratini
// Creare in HTML una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.

// Genero numeri random da 1 a 10
function genera_random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

$('.quadratini').each(function(){
    var numeri_random = genera_random(0,11);
    console.log(numeri_random);
    $(this).append(numeri_random);

// Bonus 2 se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde

    if(numeri_random == 0){
    // se il numero è 0 sarà di colore verde
         $(this).addClass('zero')
    } else if (numeri_random % 2 == 0) {
    // se il numero è pari sarà di colore rosso
        $(this).addClass('pari-rosso')
    } else {
        // se il numero è dispari sarà di colore nero
        $(this).addClass('dispari-nero')
    }

})


// BONUS 1
// for (var i = 0; i < 25; i++) {
//  $('#griglia').append('<div class="quadratini"></div>')
// }
