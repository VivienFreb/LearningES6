let get = function (url) {
    return new Promise(function (resolve, reject) {
        let xhr = new window.XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr);
                }
            }
        };
        xhr.open('GET', url);
        xhr.send();
    })
};

let getPosts = async function () {
    let response;
    response = await get('https://jsonplaceholder.typicode.com/users');
    let users = JSON.parse(response);
    response = await get('https://jsonplaceholder.typicode.com/posts?userId=' + users[0].id);
    return JSON.parse(response);
};


getPosts().then(function (posts) {
    console.log('Le premier article : ', posts[0]);
}).catch(function(error){
    console.log(error)
}).then(function(){
    console.log('Fin des requêtes AJAX.')
});

// Si on a plusieurs Promises et que l'on veut attendre que toutes les promesses soient faites, il existe Promise.all
// cf. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/all
// cf. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise

let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 2000, 'foo');
});
// Au bout de 2 sec (le setTimeout), toutes les promesses seront effectuées
Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values);
}).catch(function(error){
    console.log('Une erreur : ', error);
});