//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nameFriends = [];



function addFriend(){
    let input = document.querySelector('input').value;
    if(input == ''){
        alert('Por favor digite um nome valido');
    } else {
        nameFriends.push(input);
        // limpar input
        cleanInput();

        // mostra os amigos adicionados
        showListFriends();
    }
}


function sortFriend(){
    let listResult = document.getElementById('result');
    listResult.innerHTML = "";
    let indexSorted = parseInt(Math.random() * nameFriends.length);
    let sortedFriend = nameFriends.at(indexSorted);
    listResult.innerHTML = `<li>${sortedFriend}</li>`;
    
}

function showListFriends(){
    let listFriend = document.getElementById('listFriend');
    listFriend.innerHTML = '';
    let i = 0;
    while(i<nameFriends.length){
        let tempFriend = nameFriends[i];
        listFriend.innerHTML += `<li>${tempFriend}</li>`;
        i++;
    }
}

function cleanInput(){
    let input = document.querySelector('input');
    input.value = '';
}




