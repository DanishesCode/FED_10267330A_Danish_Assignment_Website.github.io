document.addEventListener("DOMContentLoaded", function () { 
    getCartData();
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