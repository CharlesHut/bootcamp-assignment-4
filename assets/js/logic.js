function myFunction() {
    let divs = document.querySelectorAll (".div-2")
    let div = document.querySelector (".div-1")
    for (let index = 0; index < divs.length; index++) {
        divs[index].classList.toggle("dark-mode")
    }
    var element = document.body;
    element.classList.toggle("dark-mode");
    div.classList.toggle("dark-mode")
 }



