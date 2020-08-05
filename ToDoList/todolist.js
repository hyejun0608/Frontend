const list = document.querySelector(".list");

function changelist(event) {
    const plusbtn = event.target;
    const changedlist = plusbtn.parentElement;
    
}

function removed(event) {
    const btn = event.target;
    const removelist = btn.parentElement;
    list.removeChild(removelist);
}

function checkedlist(event) {
    if(event.target.className === "checked") {
        event.target.className = "";
    }
    else {
        event.target.className = "checked";
    }
}

function newElement() {
    const li = document.createElement("li");
    const inputValue = document.querySelector(".write").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue !== null) {
        document.querySelector(".list").appendChild(li);
    }
    document.querySelector(".write").value = "";
    const removebtn = document.createElement("button");
    removebtn.innerText = "X";
    removebtn.className = "close";
    const changecontents = document.createElement("button");
    changecontents.innerText = "+";
    changecontents.className = "change";
    li.appendChild(changecontents);
    li.appendChild(removebtn);
    removebtn.addEventListener("click", removed);
    li.addEventListener("click", checkedlist);
    changecontents.addEventListener("click", changelist);
}

