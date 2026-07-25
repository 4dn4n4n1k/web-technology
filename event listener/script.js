const para = document.getElementById("para");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const reset = document.getElementById("reset");
const color = document.getElementById("color");

btn1.addEventListener("click", function(){
    para.innerHTML = "You clicked on button 1";
})

btn2.addEventListener("click", function(){
    para.innerHTML = "You clicked on button 2";
})

reset.addEventListener("click", function(){
    para.innerHTML = "";
})

color.addEventListener("click", function(){
    para.style.color = "red";
})