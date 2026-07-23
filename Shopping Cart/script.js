let laptop = 399;
let mac = 299;
let iphone = 199;

let total = 0;


const btnLaptop = document.getElementById("btnLaptop");
const btnMac = document.getElementById("btnMac");
const btnIphone = document.getElementById("btnIphone");

const btnProceed = document.getElementById("proceed");

btnLaptop.onclick = function () {
    total += laptop;
    alert("Laptop added!");
};

btnMac.onclick = function () {
    total += mac;
    alert("Mac added!");
};

btnIphone.onclick = function () {
    total += iphone;
    alert("iPhone added!");
};


btnProceed.onclick = function () {

    if (total > 500) {

        let discount = total * 0.20;
        let finalTotal = total - discount;

        result.innerHTML =
            "Original Total: $" + total +
            "<br>Coupon (20%): -$" + discount.toFixed(2) +
            "<br><strong>Final Total: $" + finalTotal.toFixed(2) + "</strong>";

    } else {

        result.innerHTML =
            "<strong>Total: $" + total + "</strong><br>No coupon applied.";

    }

}

