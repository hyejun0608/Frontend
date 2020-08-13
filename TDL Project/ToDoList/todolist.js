const checkbtn = document.querySelector(".checkbtn");

function checked(event) {
    const checking = event.target;
    if(checking.nextSibling.className !== "checked") {
        checking.nextSibling.className = "checked";
    }
}

function init() {
    checkbtn.addEventListener("click", checked);
}
init();