document.addEventListener("DOMContentLoaded", function () { 
    getCartData();
    trackDisplay();
    displayMenu();
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
function getCartData(){
    data = localStorage.getItem("cart")
    if(data == null){
        return [];
    }else{
        const itemQuantity = document.getElementById("itemQuantity");
        var returned = JSON.parse(data)
        var sum = 0;
            returned.forEach(function(x){
                sum += x[1];
            })
            itemQuantity.textContent = sum;
        return returned;
    } 
}
function displayMenu(){
    const menu = document.querySelector("nav ul");
    const close = document.querySelector("nav #close");
    const hamburgerMenu = document.querySelector("nav #hamburgerMenu");
    hamburgerMenu.addEventListener("click",function(){
        menu.style.display = "block";
        hamburgerMenu.style.display = "none";
        close.style.display = "block";
        })
    close.addEventListener("click",function(){
        menu.style.display = "none";
        hamburgerMenu.style.display = "block";
        close.style.display = "none";
    })
    window.addEventListener("resize",function(){
        if(this.window.innerWidth< 667){
            hamburgerMenu.style.display = "block";
            close.style.display = "none";
            menu.style.display = "none";
            menu.style.flexDirection = "column";
        }else{
            hamburgerMenu.style.display = "none";
            close.style.display = "none";
            menu.style.display = "flex";
            menu.style.flexDirection = "row";
        }
    })
    }