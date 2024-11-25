document.addEventListener("DOMContentLoaded", function () { 
    var cart = getCartData();
    calculateInCart(cart);
    checkDiscount(cart);
    listCartContent(cart);
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
function calculateInCart(cart){
    sum = 0;
    const totalCart = document.getElementById("totalCart");
    const totalPay = document.getElementById("totalPay");
    cart.forEach(function(x){
        sum += x[1]*x[2];
    })
    totalCart.textContent = "$"+sum;
    totalPay.textContent = "$" +sum;
    return sum;
}
function checkDiscount(cart){
    discountCodeList = [
        ["Danish123",2],
        ["PizzaHutSaver",10]
    ]
    const button = document.querySelector(".discount .apply");
    const totalPay = document.getElementById("totalPay");
     button.addEventListener("click",function(){
        discountCode = document.querySelector(".discount input").value;
        var discountSelected = null;cloneNode(true);
        discountCodeList.forEach(function(x){
            if(x[0] == discountCode){
                discountSelected = x
            }
        })
        if(discountSelected == null){
            alert("Invalid Discount Code Please Try again!")
        }else{
            const discountShower = document.getElementById("discount");
            discountShower.style.display = "flex";
            discountShower.querySelector("span").textContent = "$"+discountSelected[1];
            let total = calculateInCart(cart);
            totalPay.textContent = "$"+(total-discountSelected[1]);
        }
        
     })
}
function listCartContent(cart){
    const template = document.getElementById("checkout-template");
    const container = document.querySelector(".checkout-content");
    cart.forEach(function(content){/*[name,quantity,price]*/
        var clone = template.cloneNode(true);
        let name = clone.querySelector(".item-details #label");
        let quantity = clone.querySelector(".item-quantity span");
        let price = clone.querySelector(".item-price");
        name.textContent = content[0];
        quantity.textContent = content[1];
        price.textContent = "$"+(content[1]*content[2]);
        clone.style.display = "flex";
        container.appendChild(clone);
    })
}
