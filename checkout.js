document.addEventListener("DOMContentLoaded", function () { 
    calculateInCart();
    checkDiscount();
    listCartContent(getCartData());
    add();
    minus();
    console.log(getCartData());
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
function calculateInCart(){
    cart = getCartData();
    sum = 0;
    const totalCart = document.getElementById("totalCart");
    const totalPay = document.getElementById("totalPay");
    cart.forEach(function(x){
        sum += x[1]*x[2];
    })
    totalCart.textContent = "$"+sum.toFixed(2);
    totalPay.textContent = "$" +sum.toFixed(2);
    return sum.toFixed(2);
}
function checkDiscount(){
    discountCodeList = [
        ["Danish123",2],
        ["PizzaHutSaver",10]
    ]
    const button = document.querySelector(".discount .apply");
    const totalPay = document.getElementById("totalPay");
     button.addEventListener("click",function(){
        discountCode = document.querySelector(".discount input").value;
        var discountSelected = null;
        discountCodeList.forEach(function(x){
            if(x[0] == discountCode){
                discountSelected = x;
            }
        })
        if(discountSelected == null){
            alert("Invalid Discount Code Please Try again!")
        }else{
            const discountShower = document.getElementById("discount");
            discountShower.style.display = "flex";
            discountShower.querySelector("span").textContent = "$"+discountSelected[1];
            let total = calculateInCart();
            totalPay.textContent = "$"+(total-discountSelected[1]).toFixed(2);
        }
        
     })
}
function listCartContent(cart){
    const template = document.getElementById("checkout-template");
    const container = document.querySelector(".checkout-content");
    cart.forEach(function(content){/*[name,quantity,price,image]*/
        var clone = template.cloneNode(true);
        let name = clone.querySelector(".item-details #label");
        let quantity = clone.querySelector(".item-quantity span");
        let price = clone.querySelector(".item-price");
        let image = clone.querySelector(".item-details img");
        name.textContent = content[0];
        quantity.textContent = content[1];
        image.src = content[3];
        price.textContent = "$"+(content[1]*content[2]).toFixed(2);
        clone.style.display = "flex";
        container.appendChild(clone);
        template.remove();
    })
}
function add(){
    const discountShower = document.getElementById("discount");
    const addButtons = document.querySelectorAll(".item-quantity .add");
    addButtons.forEach(function(x){
        x.addEventListener("click",function(){
            cart = getCartData();
            var item = x.parentElement.parentElement.querySelector("span").textContent;
            cart.forEach(function(y){
                if(y[0] == item){
                    y[1] +=1;
                    x.parentElement.querySelector("span").textContent = y[1];
                    x.parentElement.parentElement.querySelector(".item-price").textContent = "$"+(y[1]*y[2]).toFixed(2);
                    console.log(y[1]*y[2]);
                }
            })
            discountShower.style.display = "none";
            localStorage.setItem("cart",JSON.stringify(cart));
            calculateInCart(cart);
        })
    })
}
function minus(){
    const discountShower = document.getElementById("discount");
    const minusButtons = document.querySelectorAll(".item-quantity .minus");
    minusButtons.forEach(function(x){
        x.addEventListener("click",function(){
            cart = getCartData();
            var item = x.parentElement.parentElement.querySelector("span").textContent;
            cart.forEach(function(y){
                if(y[0] == item && y[1] != 1){
                    y[1] -=1;
                    x.parentElement.querySelector("span").textContent = y[1];
                    x.parentElement.parentElement.querySelector(".item-price").textContent = "$"+Math.round((y[1]*y[2])*100)/100;
                    console.log(y[1]*y[2]);
                }else if(y[0] == item && y[1] == 1){
                    x.parentElement.parentElement.remove();
                    cart.splice(cart.indexOf(y),1);
                    console.log(cart);
                }
            })
            discountShower.style.display = "none";
            localStorage.setItem("cart",JSON.stringify(cart));
            calculateInCart(cart);
        })
    })
}