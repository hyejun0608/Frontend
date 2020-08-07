const list = document.querySelector(".list");

function enterkey() {
    const ENTER_KEY_CODE = 13;
    if (event.keyCode === ENTER_KEY_CODE) {
        newElement();
    }
}

function changelist(event) {
    const plusbtn = event.target;
    const changedlist = plusbtn.previousSibling.previousSibling;
    if(plusbtn.className === "change") {
        changedlist.removeAttribute("disabled");
    }
    else if(plusbtn.className !== "change") {
        changedlist.setAttribute('disabled', 'true');
    }
}

function removed(event) {
    const btn = event.target;
    const removelist = btn.parentElement;
    removelist.remove();
}

function checkedlist(event) {
    event.target.classList.toggle("checked");
}

function newElement() {
    const li = document.createElement("li");
    const newinput = document.createElement("input");
    const inputValue = document.querySelector(".write").value;
    const t = document.createTextNode(inputValue);
    newinput.value = inputValue;
    newinput.disabled = true;
    // newinput.setAttribute('disabled', 'true');
    newinput.appendChild(t);
    if(inputValue !== '') {
        document.querySelector(".list").appendChild(li);
    }
    document.querySelector(".write").value = "";
    const removebtn = document.createElement("button");
    removebtn.innerText = "X";
    removebtn.className = "close";
    const changecontents = document.createElement("button");
    changecontents.innerText = "+";
    changecontents.className = "change";
    li.appendChild(newinput);
    li.appendChild(removebtn);
    li.appendChild(changecontents);
    changecontents.addEventListener("click", changelist);
    removebtn.addEventListener("click", removed);
    li.addEventListener("dblclick", checkedlist);
}