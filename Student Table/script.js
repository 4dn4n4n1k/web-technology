const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function(){

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const dept = document.getElementById("dept").value.trim();

    if(name == "" || roll == "" || dept == ""){
        alert("Please fill all the information.");
        return;
    }

    const tbody = document.querySelector("#table tbody");

    const tr = document.createElement("tr");


    const tdName = document.createElement("td");
    tdName.textContent = name;

    const tdRoll = document.createElement("td");
    tdRoll.textContent = roll;

    const tdDept = document.createElement("td");
    tdDept.textContent = dept;

    const tdAction = document.createElement("td");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";

    deleteBtn.addEventListener("click", function(){
        tr.remove();
    });

    tdAction.appendChild(deleteBtn);

    tr.appendChild(tdName);
    tr.appendChild(tdRoll);
    tr.appendChild(tdDept);
    tr.appendChild(tdAction);

    tbody.appendChild(tr);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("dept").value = "";
});