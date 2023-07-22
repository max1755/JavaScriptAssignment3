const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.querySelector("ul");

submit.addEventListener("click", function(){
    const listItem = document.createElement("li"); //the new item to add to the list of to-do's

    const checkBox = document.createElement("INPUT"); //creating the checkbox for each item
    checkBox.setAttribute("type", "checkbox");

    checkBox.addEventListener("change", function(){
        listItem.style.textDecoration === "line-through" ? listItem.style.textDecoration = "" 
        : listItem.style.textDecoration = "line-through"; //ternary condition for checking un-checking items
    })

    const deleteMe = document.createElement("INPUT"); //creating a way to remove the item
    deleteMe.setAttribute("type", "button");
    deleteMe.setAttribute("value", "remove");

    deleteMe.addEventListener("click", function(){
    list.removeChild(listItem);})

    listItem.textContent = input.value; //adding the new item to the list
    listItem.appendChild(checkBox);
    listItem.appendChild(deleteMe);
    list.appendChild(listItem);
})