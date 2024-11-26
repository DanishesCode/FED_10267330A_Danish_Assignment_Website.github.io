document.addEventListener("DOMContentLoaded", function () { 
    calculateInCart();
    checkDiscount();
    listCartContent(getCartData());
    add();
    minus();
    toPay();
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
function navigatePayment(){
    window.location.href = "payment.html";
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
        let discountSelected = null;
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
        let clone = template.cloneNode(true);
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
            let item = x.parentElement.parentElement.querySelector("span").textContent;
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
            let item = x.parentElement.parentElement.querySelector("span").textContent;
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
function toPay(){
    let payButton = document.querySelector(".checkout-container .pay-button");
    payButton.addEventListener("click",function(){
        let amount = document.querySelector(".totals p .payable").textContent.substring(1);
        localStorage.setItem("amount",amount);
        navigatePayment();
    })
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