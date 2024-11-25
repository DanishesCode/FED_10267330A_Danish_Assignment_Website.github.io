document.addEventListener("DOMContentLoaded", function () { 
    trackDisplay();
});
/*navigation functions*/
function navigateMenu(){
    window.location.href = "menu.html"; 
}
function navigateLocation(){
    window.location.href = "location.html"; 
}
function navigateContact(){
    window.location.href = "Contact.html"; 
}
function navigateTracking(){
    window.location.href = "tracking.html"; 
}
function navigateCheckout(){
    window.location.href = "checkout.html"; 
}
function navigateIndex(){
    window.location.href = "index.html"; 
}
function trackDisplay(){
    var reasonings = ["Currently being delivered","Kitchen is  preparing your order","There has been a delay for your order"];
    var data = localStorage.getItem("tracking");
    if(data == null){
        alert("There is no data in the serverStorage! Please order something to fix this.");
    }else{
        data = JSON.parse(data);
        const input = document.querySelector(".head input");
        const show = document.querySelector(".track-container");
        input.addEventListener("keydown",function(event){
            if(event.key == "Enter"){
                console.log("Enter pressed");
                var select = null;
                var id = input.value;
                data.forEach(function(x){
                    if(x==id){
                        select = x;
                    }
                })
                if(select == null){
                    alert("invalid tracking id!");
                }else{
                    show.style.display = "block";
                    show.querySelector("#id-show").textContent = select;
                    show.querySelector("#time-show").textContent = Math.floor(Math.random()*50)+" Minutes";
                    show.querySelector("#reasons").textContent = reasonings[(Math.floor(Math.random()*reasonings.length))];
                    
                }

            }
        })
    }
}