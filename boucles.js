// // Boucle ForEach, avant ES6
//
// var Personnes = ['Claude', 'Michelle', 'Elena', 'Lou'];
// Personnes.forEach(function (v) {
//     console.log('Nom de la personne : ' + v);
// });
//
// console.log('La boucle est finie.');
//

// Boucles ES6

var Personnes = ['Claude', 'Michelle', 'Elena', 'Lou'];
Personnes.forEach((v,k) => {
    console.log('Personne n°' + k + " : " + v)
});

console.log('La boucle est finie.');

// Même chose sur une ligne, s'il y a une seule instruction, pas besoin des accolades
Personnes.forEach((v,k) => console.log('Personne n°' + k + " : " + v))