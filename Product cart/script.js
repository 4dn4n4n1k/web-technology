const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const total = document.getElementById("total");

const coupon = document.getElementById("coupon");

const address = document.getElementById("address");
const deliveryLocation = document.getElementById("location");
const deliveryCharge = document.getElementById("deliveryCharge");
const fPrice = document.getElementById("fPrice");

const agree = document.getElementById("agree");
const submit = document.getElementById("submit");

function calculate(){
    let qty = parseInt(quantity.value);

    if(qty < 0 || isNaN(qty)){
        qty = 0;
        quantity.value = 0;
    }

    let unitPrice = parseInt(price.value);

    let totalPrice = unitPrice * qty;
    total.value = totalPrice;

    if (totalPrice > 1000) {
        coupon.innerHTML = "You are eligible for a discount.";
    } else {
        coupon.innerHTML = "";
    }

    let charge = parseInt(location.value);

    deliveryCharge.value = charge;

    fPrice.value = totalPrice + charge;

}

quantity.addEventListener("input", calculate);
deliveryLocation.addEventListener("change", calculate);

agree.addEventListener("change", function(){
    if(agree.checked){
        submit.style.display = "inline-block";
    }
    else{
        submit.style.display = "none";
    }
})

calculate();