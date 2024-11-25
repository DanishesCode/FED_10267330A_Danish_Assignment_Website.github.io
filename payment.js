document.addEventListener("DOMContentLoaded", function () { 
    pay();
});
function getAmount(){
    return localStorage.getItem("amount");
}
function getRandomTracking(){
    var data = localStorage.getItem("tracking");
    var  list;
    if (data == null){
        list = [];
    }else{
        list = JSON.parse(localStorage.getItem("tracking"));
    }
    var trackingId = Math.floor(Math.random()*999999);
    list.push(trackingId);
    localStorage.setItem("tracking",JSON.stringify(list));
    console.log(list);
    return trackingId;
}
function pay(){
    const payButton = document.querySelector(".payment-form button");
    const form = document.querySelector("form");
    amount = getAmount();
    payButton.textContent = "Pay $"+amount;
    form.addEventListener("submit",function(){
        localStorage.removeItem("cart");
        window.location.href = "index.html"; 
        alert("Successful payment! your tracking id is: "+getRandomTracking());
    })
    
    
}