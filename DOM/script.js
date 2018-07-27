var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {    
    var li = document.createElement("li");
    li.classList.add("listItems");
    li.appendChild(document.createTextNode(input.value));    
    ul.appendChild(li);
    input.value = "";        
    
    var button = document.createElement("button");
    button.classList.add("delButton");
    button.appendChild(document.createTextNode("Delete !"));
    li.appendChild(button);  
    button.onclick = removeParent;
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement()
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement()
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

ul.onclick = function(event){
    event.target.classList.toggle("done");   
}

function removeParent(event){
    event.target.parentNode.remove();
}