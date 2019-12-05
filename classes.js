class Eleve {
    // On peut gérer les valeurs par défaut via (param = défaut, param2, paramX = defaut)
    constructor (name = "Default") {
        this.notes = ['1','15','20','10'];
        this.nom = name
    }

    afficheNotes (){
        console.log("Notes de " + this.nom)
        this.notes.forEach(v => {
            console.log(v)
        })
    }
}
// Si on n'indique pas le nom de l'élève, la valeur par défaut sera alors utilisée
let ele = new Eleve("Claude");
ele.afficheNotes();

// Une classe peut hériter d'une autre et donc utiliser des méthodes de la classe mère/en ajouter.
class EleveDeux extends Eleve{
    // On peut également gérer les "restes" c'est à dire que le constructeur prendra tous les paramètres sous forme de spread (désigné par ...)
    constructor (name = "Default", ...notes) {
        super(name, ...notes);
        this.notes = notes;
        this.nom = name
    }
}

let ele3 = new EleveDeux("Pierre", '15', '20', '10', '8', '4', 'etc');
ele3.afficheNotes();

// Le spread n'est pas réservé qu'à cet usage là.
let notes1 = ['10', '5', '6'];
let notes2 = ['9', '20', ...notes1]
console.log(notes2); // 9, 20, 10, 5 ,6

// On peut même utiliser le spread en tant que paramètre
let ele4 = new EleveDeux("Spread", ...notes2);
ele4.afficheNotes(); //L'élève Spread aura 9,20,10,5,6


// Utilisation des littéraux de gabarits ( ` ` ) pour les chaines
// Permet de faire du multilignes et d'y ajouter directement des expression ${expression}
let text = "morceau de ";

console.log(`
Ceci est
un 
${text} phrase`);

/* Donnera
Ceci est
un
morceau de  phrase
*/


