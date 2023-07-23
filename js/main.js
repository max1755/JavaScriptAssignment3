const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.querySelector("table");

submit.addEventListener("click", function(){

    const itemRow = document.createElement("tr"); //row for new item
    const itemString = "" + input.value; //capturing input field text

    if (!itemString) //if string is empty don't bother making cell, nothing entered
    {

    }else{

    const td1 = document.createElement("td"); //cell for text
    const td2 = document.createElement("td"); //cell for checkbox
    const td3 = document.createElement("td"); //cell for delete button

    //creating the checkbox for each item
    const checkBox = document.createElement("INPUT"); 
    checkBox.setAttribute("type", "checkbox");
    checkBox.addEventListener("change", function(){
        td1.style.textDecoration === "line-through" ? td1.style.textDecoration = "" 
        : td1.style.textDecoration = "line-through"; //ternary condition for checking un-checking items
    })

    //Creating delete button
    const deleteMe = document.createElement("INPUT"); //creating a way to remove the item
    deleteMe.setAttribute("type", "button");
    deleteMe.setAttribute("value", "remove");
    deleteMe.addEventListener("click", function(){
    list.removeChild(itemRow);
    })

    //Adding the new creation to the table
    td1.textContent = itemString;
    td2.appendChild(checkBox);
    td3.appendChild(deleteMe);
    
    itemRow.appendChild(td1);
    itemRow.appendChild(td2);
    itemRow.appendChild(td3);
    list.appendChild(itemRow);

    input.value = "";
    }
})