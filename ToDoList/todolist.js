const list = document.querySelector(".list");
const enter = document.querySelector(".enter")
const input = document.querySelector(".write");
const TODOS_LS = "toDos";
let toDos = [];

// list 지우기
function removed(event) {
    const btn = event.target;
    const removelist = btn.parentElement;
    removelist.remove();
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(removelist.id);
    });
    toDos = cleanToDos;
    saveToDo();
}

//enterkey누를때 list 생성
function enterkey() {
    const ENTER_KEY_CODE = 13;
    if (event.keyCode === ENTER_KEY_CODE) {
        handleclick();
    }
}

// list 수정
function changelist(event) {
    const plusbtn = event.target;
    const changedlist = plusbtn.previousSibling.previousSibling;
    if(plusbtn.className === "change") {
        changedlist.removeAttribute("disabled");
    }
    else if(plusbtn.className !== "change") {
        changedlist.setAttribute('disabled', 'true');
    }
    changedlist.forEach(function(toDo) {
        if(toDo.text !== parseInt(changedlist.text)) {
            toDo.text = changedlist.text;
        }
    });
    saveToDo();
}

// list 체크
function checkedlist(event) {
    event.target.classList.toggle("checked");
}

//localStorage 저장
function saveToDo() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// list 생성
function newElement(text) {
    const li = document.createElement("li");
    li.addEventListener("dblclick", checkedlist);
    //newinput
    const newinput = document.createElement("input");
    newinput.value = text;
    newinput.disabled = true;
    // newinput.setAttribute('disabled', 'true');
    li.appendChild(newinput);
    // removebtn
    const removebtn = document.createElement("button");
    removebtn.innerText = "X";
    removebtn.className = "close";
    li.appendChild(removebtn);
    removebtn.addEventListener("click", removed);
    // changecontents
    const changecontents = document.createElement("button");
    changecontents.innerText = "+";
    changecontents.className = "change";
    li.appendChild(changecontents);
    changecontents.addEventListener("click", changelist);
    if(newinput.value !== '') {
        document.querySelector(".list").appendChild(li);
    }
    // toDos
    const newId = toDos.length + 1;
    li.id = newId;
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDo();
}

function handleclick(event) {
    const currentValue = input.value;
    newElement(currentValue);
    input.value = "";
}

// localStorage 읽기
function loadToDo() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parseToDos = JSON.parse(loadedToDos);
        parseToDos.forEach(function(toDo) {
            newElement(toDo.text);
        });
    }
}

function init() {
    loadToDo();
    enter.addEventListener("click", handleclick);
}
init();