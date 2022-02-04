var profileName = document.querySelector("#user");

var requests = 2;
var requestsElement = document.querySelector("#requests");

var connections = 418;
var connectionsElement = document.querySelector("#connections");

var todd = document.getElementById("todd");
var phil = document.getElementById("phil");



function editProfile() {
    user.innerText= "Abby Normal";
}

function accept(){
    requests--
    requestsElement.innerText = requests;
    connections++
    connectionsElement.innerText = connections;
    todd.parentNode.removeChild(todd);
}

function deny(){
    requests--
    requestsElement.innerText = requests;
    todd.parentNode.removeChild(todd);
}


function acceptPhil(){
    requests--
    requestsElement.innerText = requests;
    connections++
    connectionsElement.innerText = connections;
    phil.parentNode.removeChild(phil);
}

function denyPhil(){
    requests--
    requestsElement.innerText = requests;
    phil.parentNode.removeChild(phil);
}