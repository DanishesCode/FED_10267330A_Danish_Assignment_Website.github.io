document.addEventListener("DOMContentLoaded", function () { 
    getCartData();
    initMap();
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
function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 }, // Set the latitude and longitude for the center
      zoom: 8, // Zoom level (1 is world view, higher numbers zoom in)
    });
  }