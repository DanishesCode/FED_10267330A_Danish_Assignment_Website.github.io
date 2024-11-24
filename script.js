document.addEventListener("DOMContentLoaded", function () {
    searchFilter();
    filterFunc();
});



/*values*/
let filter = "all";
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
function searchFilter(){
    const searchInputElement = document.querySelector(".search-bar");
    const menuItemElements = document.querySelectorAll(".menu-item");
    searchInputElement.addEventListener("input", function () {
        const searchQueryText = searchInputElement.value.toLowerCase();
        let selected;
        menuItemElements.forEach(function (menuItemElement) {
            const itemNameText = menuItemElement.querySelector(".item-name").textContent.toLowerCase();
            if (itemNameText.includes(searchQueryText)) {
                menuItemElement.style.display = "block";
                selected = menuItemElement;
            } else {
                menuItemElement.style.display = "none"; 
            }
            
            filter = selected.dataset.category;
        });
    });
}
function filterFunc(){
    const filterButtons = document.querySelectorAll(".filterContainer button");
    filterButtons.forEach(function(x){
        if(x.getAttribute(id) == filter){
            x.style.color = "red";
        }else{
            x.style.color = "white";
        }
    })


    filterButtons.forEach(function(pressed){
        pressed.addEventListener("click",function(){
            const cat = pressed.getAttribute("id");
            filter = cat;
            filterButtons.forEach(function(x){
                if(x == pressed){
                    x.style.color = "red";
                }else{
                    x.style.color = "white";
                }
            })
            
        })
    })

}