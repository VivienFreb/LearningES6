const getUsers = async function(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(response.ok){
        let datas = await response.json();
        console.log(datas);
    } else {
        console.error('Erreur : ', response.status)
    }
}

getUsers();