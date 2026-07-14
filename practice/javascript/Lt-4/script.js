const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const department = document.getElementById("department").value.trim();


    if (name === "" || roll === "" || department === "") {
        alert("Please fill in all fields.");
        return;
    }

    const tbody = document.querySelector("#studentTable tbody");

    const tr = document.createElement("tr");


    const tdName = document.createElement("td");
    tdName.textContent = name;

    const tdRoll = document.createElement("td");
    tdRoll.textContent = roll;

    const tdDepartment = document.createElement("td");
    tdDepartment.textContent = department;

    const tdAction = document.createElement("td");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";

    deleteBtn.addEventListener("click", function () {
        tr.remove();
    });

    tdAction.appendChild(deleteBtn);

    tr.appendChild(tdName);
    tr.appendChild(tdRoll);
    tr.appendChild(tdDepartment);
    tr.appendChild(tdAction);

    tbody.appendChild(tr);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("department").value = "";
});