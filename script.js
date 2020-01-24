let textInput = document.querySelector(".textInput"),
    form = document.querySelector(".form"),
    collection = document.querySelector(".collection"),
    submit = document.querySelector(".submit"),
    remove = document.querySelector(".delete"),
    item = document.querySelector(".added");

submit.addEventListener("click", addToList);
collection.addEventListener("click", removeItem);

function addToList(e){

    let text = textInput.value;
    let li = document.createElement("li");
    li.classList = "added";
    li.appendChild(document.createTextNode(text));

    let deleteButton = document.createElement("a");
    deleteButton.classList = "delete";
    deleteButton.textContent = `X`;

    li.appendChild(deleteButton);
    collection.appendChild(li);

    e.preventDefault();
}

function removeItem(){
    if(remove.parentElement.classList.contains(".added")){
        console.log(remove.parentElement)
    }
}