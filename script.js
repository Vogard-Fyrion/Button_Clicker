function login(element){
    if(element.innerText != "Login"){
        element.innerText = "Login";
    } else {
        element.innerText = "Logout";
    }
}

function alertText(){
    alert("Ninja was liked")
}

function remove(element){
    element.remove();
}