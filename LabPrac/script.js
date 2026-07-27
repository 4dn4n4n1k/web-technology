const generate = document.getElementById("generate");
const reset = document.getElementById("reset");

generate.addEventListener("click", function(){
    
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let dept = document.getElementById("dept").value;
    let salary = document.getElementById("salary").value;

    let feedback = document.getElementById("feedback");
    let card = document.getElementById("card");

    if(name == "" || id == "" || dept == "" || salary == ""){
        
    feedback.textContent = "Please fill all the fields";
    card.style.display = "none";
    return;
    }

    let category;
    let color;

    if(Number(salary) >= 50000){
        category = "Senior Employee";
        color = "lightgreen"
    }

    else{
        category = "Junior Employee";
        color = "lightyellow";
    }

    const nameRegex = /^[A-Za-z ]+$/;
    const idRegex = /^[A-Za-z0-9]+$/;
    const deptRegex = /^[A-Za-z ]+$/;
    const salaryRegex = /^[0-9]+$/;

    if(!nameRegex.test(name)){
        feedback.innerHTML = "Employee name should only contain letters";
        return;
    }

    if(!idRegex.test(id)){
        feedback.innerHTML = "Employee ID should contain only letters";
        return;
    }

    if(!deptRegex.test(dept)){
        feedback.innerHTML = "Invalid Department";
        return;
    }

    if(!salaryRegex.test(salary)){
        feedback.innerHTML = "Invalid Salary";
        return;
    }

    feedback.innerHTML= "";

    card.style.display = "block";
    card.style.backgroundColor = color;

    document.getElementById("cardName").textContent = name;
    document.getElementById("cardId").textContent = id;
    document.getElementById("cardDept").textContent = dept;
    document.getElementById("cardSalary").textContent = salary;
    document.getElementById("cardCategory").textContent = category; 
})

let card = document.getElementById("card");

reset.addEventListener("click", function(){

    document.getElementById("name").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("feedback").textContent = "";

    card.style.display= "none";
})