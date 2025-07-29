//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let list = document.getElementById('result');
list.innerHTML = "";
let nameFriends = [];

function addFriend(){
    let input = document.querySelector('input').value;
    if(input == ''){
        alert('Por favor digite um nome valido');
    } else {
        nameFriends.push(input);
    }
    cleanInput();
}

function sortFriend(){
    let indexSorted = parseInt(Math.random() * nameFriends.length);
    let sortedFriend = nameFriends.at(indexSorted);
    console.log(sortedFriend);
    list.innerHTML = `<li>${sortedFriend}</li>`;
}

function cleanInput(){
    input = document.querySelector('input');
    input.value = '';
}




