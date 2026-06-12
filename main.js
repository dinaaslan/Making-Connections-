//for removing connection requests when clicking the buttons//
function removeRequest(button) {
    button.parentElement.remove();
}

//for changing the user name when clicking//
function ChangeName (element) {
    var name= document.querySelector(".user-name");
    name.innerText= "John Doe";
}