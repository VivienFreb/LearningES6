let get = function (url){
    return new Promise(function(resolve, reject){
        let xhr = new window.XMLHttpRequest();

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(xhr.responseText);
                } else{
                    reject(xhr);
                }
            }
        };
        xhr.open('GET', url);
        xhr.send();
    })
};

let showError = function (e){
    console.log('Erreur : ', e);
};

let getPosts = function(success, error){
    return new Promise(function (resolve, reject){
        get('https://jsonplaceholder.typicode.com/users').then(function(response){
            let users = JSON.parse(response);
            get('https://jsonplaceholder.typicode.com/posts?userId=' + users[0].id).then(function(response){
                let posts = JSON.parse(response);
                resolve(posts);
            }).catch(showError)
        }).catch(showError);
    })
};

getPosts().then(function(posts){
    console.log('Le premier article : ', posts[0]);
});
