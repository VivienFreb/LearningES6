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

let getPosts = function () {
    return get('https://jsonplaceholder.typicode.com/users').then(function (response) {
        let users = JSON.parse(response);
        return get('https://jsonplaceholder.typicode.com/posts?userId=' + users[0].id)
    }).then(function (response) {
        return JSON.parse(response);
    })
};

getPosts().then(function (posts) {
    console.log('Le premier article : ', posts[0]);
}).catch(function(error){
    console.log(error)
}).then(function(){
    console.log('Fin des requêtes AJAX.')
});
