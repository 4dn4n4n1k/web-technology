window.onload = function () {
    calculateTotal();
};

const threshold = 3000;

function calculateTotal() {

    let unitPrice = parseInt(document.getElementById("product").value);
    document.getElementById("price").value = unitPrice;

    let qty = parseInt(document.getElementById("qty").value);

    if (qty <= 0) {
        alert("Quantity cannot be zero or negative.");
        qty = 1;
        document.getElementById("qty").value = 1;
    }

    let delivery = parseInt(document.getElementById("delivery").value);

    let total = (unitPrice * qty) + delivery;

    document.getElementById("total").value = total;

    if (total >= threshold) {
        document.getElementById("coupon").innerHTML =
            "You are now eligible for a coupon.";
    } else {
        document.getElementById("coupon").innerHTML = "";
    }
}

function showButton() {

    if (document.getElementById("agree").checked) {
        document.getElementById("submitBtn").style.display = "inline-block";
    } else {
        document.getElementById("submitBtn").style.display = "none";
    }

}