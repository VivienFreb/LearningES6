// Avant ES6, utilisation d'une var "self" pour avoir le bon contexte à l'intérieur de la function de this.eleves.forEach...
var classe = {
    eleves: ['Jean', 'Lou', 'Paul'],
    nom: 'CM2',
    afficheEleves: function () {
        var self = this;
        this.eleves.forEach(function (v) {
            console.log(self.nom) // this.nom undefined
        })
    }
};

classe.afficheEleves();

// La fonction flechée "=>" permet d'avoir directement le bon contexte sans passer par une var "self".
var classe2 = {
    eleves: ['Marie', 'Claude', 'Jacques'],
    nom: 'Terminale',
    afficheEleves() {
        this.eleves.forEach(v => console.log(this.nom))} // this.nom correspond bien au nom de la classe
};

classe2.afficheEleves();

// La fonction flechée fait également un return de base (visible sur Babeljs.io)
// Avant ES6, pour ajouter Mr devant chaque élève:
console.log(classe.eleves.map(function (v) {
    return 'Mr.' + v
}));
// ES6
console.log(classe.eleves.map(v => 'Mr.' + v));