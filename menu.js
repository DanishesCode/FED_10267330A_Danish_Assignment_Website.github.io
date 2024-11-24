document.addEventListener("DOMContentLoaded", function () { 
    searchFilter();
    filterFunc();
    addToCart([]);
});



let filterStatus = "all";
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
    
}
function addToCart(cart){
    const addButton = document.querySelectorAll(".menu-item button");
    const itemQuantity = document.getElementById("itemQuantity");
    addButton.forEach(function(button){
        button.addEventListener("click",function(){
            let item = button.parentElement.querySelector("p").textContent; 
            console.log(item);
            if(cart.length == 0){
                cart.push([item,1])
            }else{
                let selected = null;
                cart.forEach(function(x){
                    if(x[0] == item){
                        selected = x
                    }
                })
                if(selected == null){
                    cart.push([item,1])
                }else{
                    selected[1] +=1;
                }
            }


            console.log(cart);
        })
    })
}

function searchFilter(){
    const searchInputElement = document.querySelector(".search-bar");
    const menuItemElements = document.querySelectorAll(".menu-item");
    const h2Elements = document.querySelectorAll(".menu-section h2");
    const menu = document.querySelectorAll(".menu-section");
    var list = [];
    searchInputElement.addEventListener("input", function () {
        const searchQueryText = searchInputElement.value.toLowerCase();
        let selected;
        list = [];
        menuItemElements.forEach(function (menuItemElement) { 
            const itemNameText = menuItemElement.querySelector(".item-name").textContent.toLowerCase();
            if (itemNameText.includes(searchQueryText)) {
                menuItemElement.style.display = "block";
                selected = menuItemElement;
                list.push(selected.parentElement.parentElement);
            } else {
                menuItemElement.style.display = "none"; 
            }
        });
        menu.forEach(function(x){
            x.style.display = "none";
        })
        list.forEach(function(itemElement){
            itemElement.style.display = "block";
        })
    });
}
function filterFunc(){
    const filterButtons = document.querySelectorAll(".filterContainer button");
    const menuContentCat = document.querySelectorAll(".menu-section");

    filterButtons.forEach(function(pressed){
        if(pressed.getAttribute("id") == filterStatus){
            pressed.style.color = "#DE9355";
        }else{
            pressed.style.color = "white";
        }
        pressed.addEventListener("click",function(){
            const cat = pressed.getAttribute("id");
            filter = cat;
            filterButtons.forEach(function(x){
                if(x == pressed){
                    x.style.color = "#DE9355";
                }else{
                    x.style.color = "white";
                }
            })
            menuContentCat.forEach(function(item){
                if(item.dataset.category == filter || filter == "all"){
                    item.style.display = "block";
                }
                else{
                    item.style.display = "none";
                }
            })
            
        })
    })

}