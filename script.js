let itemsInCart = localStorage.getItem("itemsInCart");
let totalPrice = 0;

let myCart = [0, 0, 0]; //tells the quantity of each item in cart

const items = {
    1: {
        "name" : "ARMOURY Gaming PC A-006",
        "price": 900,
    },

    2: {
        "name" : "ARMOURY Gaming PC A-008",
        "price": 2300,
    },

    3: {
        "name" : "ARMOURY Gaming PC A-009",
        "price": 3500,
    },
}




function addItem(id){
    itemsInCart ++;
    localStorage.setItem("itemsInCart", itemsInCart);
    myCart[id] ++; //tracks the quanity of each item in the cart
    localStorage.setItem("myCart", myCart);
}

function getItemsInCart(){
    console.log(itemsInCart);
    if(itemsInCart == 0) {
        document.getElementById('output').innerHTML = "You have no items in your cart. " +
        "Check out out products page to purchase some items!";
    }else{
        totalPrice = printCart();
        document.getElementById('output').innerHTML = "You have " + itemsInCart +
        " item(s) in your cart. Your total comes to $" + totalPrice + "!";
    }

    document.getElementById("total").innerHTML = "Grand total: $" + totalPrice;

}

function printCart(){
    totalPrice = 0;
    currentCart = localStorage.getItem("myCart");
    var cart = document.getElementById("cart-items");
    let cartItem = document.createElement("p");
    for(let i = 0; i < 3; i ++){
        if(currentCart[i] > 0){
            //create an element to be added to cart
            text = "Most Recent: " +currentCart[i] + " " + items[i].name + " $" + (currentCart[i]*items[i].price) + "\n";
            cartItem.innerHTML += text;
            totalPrice += currentCart[i]*items[i].price;
        }
    }
    cart.appendChild(cartItem);
    return totalPrice;
}
