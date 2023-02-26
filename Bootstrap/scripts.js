/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project




function ready() {
    

    var addToCartButtons = document.getElementsByClassName('btn-outline-dark mt-auto')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('fw-bolder')[0].innerText
    xonsole.log(title)
    var imageSrc = shopItem.getElementsByClassName('card-img-top')[0].src
    addItemToCart(title, price, imageSrc)
    
}

function addItemToCart(title, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
}