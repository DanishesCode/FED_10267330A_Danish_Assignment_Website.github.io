document.addEventListener("DOMContentLoaded", function () { 
    getCartData();
    initMap();
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
        let returned = JSON.parse(data)
        let sum = 0;
            returned.forEach(function(x){
                sum += x[1];
            })
            itemQuantity.textContent = sum;
        return returned;
    } 
}
function initMap() {
    const locations = [
        { position: { lat: 1.3002, lng: 103.8564 }, name: "Pizza Hut - Bugis Junction" },
        { position: { lat: 1.3048, lng: 103.8318 }, name: "Pizza Hut - Orchard Road" },
        { position: { lat: 1.3526, lng: 103.9442 }, name: "Pizza Hut - Tampines Mall" },
        { position: { lat: 1.3396, lng: 103.7064 }, name: "Pizza Hut - Jurong Point" },
        { position: { lat: 1.3644, lng: 103.9915 }, name: "Pizza Hut - Changi Airport" },
        { position: { lat: 1.2894, lng: 103.8500 }, name: "Pizza Hut - Marina Bay Sands" },
        { position: { lat: 1.3212, lng: 103.9115 }, name: "Pizza Hut - Paya Lebar Square" },
        { position: { lat: 1.4294, lng: 103.7748 }, name: "Pizza Hut - Woodlands Civic Centre" },
        { position: { lat: 1.3009, lng: 103.8384 }, name: "Pizza Hut - Plaza Singapura" },
        { position: { lat: 1.3691, lng: 103.8485 }, name: "Pizza Hut - Serangoon Nex" },
        { position: { lat: 1.3256, lng: 103.8530 }, name: "Pizza Hut - City Square Mall" },
        { position: { lat: 1.3772, lng: 103.7640 }, name: "Pizza Hut - Causeway Point" },
        { position: { lat: 1.3195, lng: 103.8423 }, name: "Pizza Hut - Funan Mall" },
        { position: { lat: 1.3155, lng: 103.7657 }, name: "Pizza Hut - Clementi Mall" },
        { position: { lat: 1.2956, lng: 103.8450 }, name: "Pizza Hut - Chinatown Point" },
        { position: { lat: 1.4408, lng: 103.8002 }, name: "Pizza Hut - Sembawang Shopping Centre" },
        { position: { lat: 1.4373, lng: 103.7867 }, name: "Pizza Hut - Sun Plaza" },
        { position: { lat: 1.2932, lng: 103.8561 }, name: "Pizza Hut - Raffles City" },
        { position: { lat: 1.3458, lng: 103.8477 }, name: "Pizza Hut - Bishan Junction 8" },
        { position: { lat: 1.2764, lng: 103.8458 }, name: "Pizza Hut - VivoCity" },
        { position: { lat: 1.3672, lng: 103.8952 }, name: "Pizza Hut - Hougang Mall" },
        { position: { lat: 1.3726, lng: 103.9497 }, name: "Pizza Hut - Punggol Waterway Point" },
        { position: { lat: 1.2907, lng: 103.8458 }, name: "Pizza Hut - HarbourFront Centre" },
        { position: { lat: 1.2928, lng: 103.8465 }, name: "Pizza Hut - Great World City" },
      ];
      
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 1.3521, lng: 103.8198 }, 
      zoom: 12, 
    });

    locations.forEach(function(location) {
        const marker = new google.maps.Marker({
          position: location.position,
          map: map,
          title: location.name,
        });

        // Add an info window for each marker
        const infoWindow = new google.maps.InfoWindow({
          content: `<h3>${location.name}</h3>`,
        });

        // Show info window on marker click
        marker.addListener("click", function() {
          infoWindow.open(map, marker);
        });
      });
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