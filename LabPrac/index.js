const generate = document.getElementById("generate");
const reset =document.getElementById("reset");

generate.addEventListener("click", function(){
    
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let dept = document.getElementById("dept").value;
    let salary = document.getElementById("salary").value;

    let feedback = document.getElementById("feedback");
    let card = document.getElementById("card");

    if (name == "" || id == "" || dept == "" || salary == ""){
        feedback.innerHTML = "Please fill out all the fields";
        card.innerHTML = "";
        return;
    }

    let category;
    let color;

    if(Number(salary) >= 50000){
        category = "Senior Employee";
        color = "lightgreen";
    }

    else{
        category = "Junior Employee";
        color = "lightyellow";
    }

    const nameRegex = /^[A-Za-z ]+$/;
    const idRegex = /^[A-Za-z0-9]+$/;
    const deptRegex = /^[A-Za-z ]+$/;
    const salaryRegex = /^[0-9]+$/;

    if (!nameRegex.test(name)) {
        feedback.innerHTML = "Employee name should contain only letters.";
        return;
    }

    if (!idRegex.test(id)) {
        feedback.innerHTML = "Employee ID should contain only letters and numbers.";
        return;
    }

    if (!deptRegex.test(dept)) {
        feedback.innerHTML = "Department should contain only letters.";
        return;
    }

    if (!salaryRegex.test(salary)) {
        feedback.innerHTML = "Salary must be a valid number.";
        return;
    }

    feedback.innerHTML = "";

    card.innerHTML = `
        <div class="card" style="background:${color}">
            <h2>Employee Card</h2>
            <p>Name: ${name}</p>
            <p>ID: ${id}</p>
            <p>Department: ${dept}</p>
            <p>Salary: ${salary}</p>
            <p>Category: ${category}</p>
        </div>
        `;
})

let card = document.getElementById("card");

reset.addEventListener("click", function(){
    
    document.getElementById("name").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";

    card.innerHTML= "";

})