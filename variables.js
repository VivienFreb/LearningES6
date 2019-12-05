// Nouveaux types de variables : let & const

const constante = 2;
// constante = 3; Impossible car une constante est en "read-only"

if(['a','b','c'].length === 2){
    let locale = 'Affichage'
}
// console.log(locale); Impossible car "let" permet de déclarer une variable dans un scope local. Si utilisation de var ici, le log aurait fonctionné.


