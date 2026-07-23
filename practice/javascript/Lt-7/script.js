let paragraph = document.getElementById("para");
let fontSize = 20;

function changeBg(){
    paragraph.style.backgroundColor = "red";
}

function increaseFont(){
    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";
}

function centerText(){
    paragraph.style.textAlign = "center";
}

function resetStyle() {
    fontSize = 20;
    
    paragraph.style.backgroundColor = "white";
    paragraph.style.fontSize = 20;
    paragraph.style.textAlign = "left";
}