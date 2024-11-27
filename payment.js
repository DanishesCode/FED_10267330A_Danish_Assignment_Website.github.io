document.addEventListener("DOMContentLoaded", function () { 
    pay();
});
function getAmount(){
    return localStorage.getItem("amount");
}
function getRandomTracking(){
    let data = localStorage.getItem("tracking");
    let  list;
    if (data == null){
        list = [];
    }else{
        list = JSON.parse(localStorage.getItem("tracking"));
    }
    let trackingId = Math.floor(Math.random()*999999);
    list.push(trackingId);
    localStorage.setItem("tracking",JSON.stringify(list));
    console.log(list);
    return trackingId;
}

function pay(){
    let container = document.getElementById("lottie");
    var animation = lottie.loadAnimation({
        container: container,  
        renderer: 'svg', 
        loop: false, 
        autoplay: false, 
        path: 'animation/tick.json'  
    });
    const payButton = document.querySelector(".payment-form button");
    const form = document.querySelector("form");
    amount = getAmount();
    payButton.textContent = "Pay $"+amount;
    form.addEventListener("submit",function(x){
        x.preventDefault();
        container.style.display = "block";
        animation.play();
        container.style.display = "block";
        animation.addEventListener('complete', function () {
        container.style.display = "none";
        localStorage.removeItem("cart");
        window.location.href = "success.html"; 
        let id = getRandomTracking();
        localStorage.setItem("currentTracking",id);
        });
    })
}
