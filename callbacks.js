let get = function (url, success, error){
    let xhr = new window.XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                success(xhr.responseText);
            } else{
                error(xhr);
            }
        }
    };
    xhr.open('GET', url);
    xhr.send();
};

let getPosts = function (success, error){
    get('https://jsonplaceholder.typicode.com/users', function(response){
        let users = JSON.parse(response);
        get('https://jsonplaceholder.typicode.com/posts?userId=' + users[0].id, function(response){
            let posts = JSON.parse(response);
            success(posts);
        }, function(e){
            error('Erreur : ', e);
        })
    }, function(e){
        error('Erreur : ', e);
    })
};


getPosts(function(posts){
    console.log('Le premier article : ', posts[0])
}, function (error){
    console.error(error);
});
