let textInput = document.querySelector(".textInput"),
    form = document.querySelector(".form"),
    collection = document.querySelector(".collection"),
    submit = document.querySelector(".submit");

form.addEventListener("submit", addToList);

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

    removeItem();
}

function removeItem(){

    deleteButton.forEach(function(item){
        item.addEventListener("click", function(){
            if(deleteButton.parentElement.classList.contains(".added")){
                console.log(deleteButton.parentElement)
            }
        })
    });
}