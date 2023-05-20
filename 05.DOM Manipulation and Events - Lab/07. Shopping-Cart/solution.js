function solve() {
   let shoppingCart = document.getElementsByClassName('shopping-cart')[0];
   let result = document.getElementsByTagName('textarea')[0];
   let products = new Set();
   let totalPrice = 0;
   let checkoutDone=false;
   shoppingCart.addEventListener('click', function (e) {
      if (e.target.nodeName !== "BUTTON") {
         return;
      }
      if (checkoutDone){
         return;
      }
      let button = e.target;

      if (Array.from(button.classList).indexOf('add-product') >= 0) {

         let productElement = e.target.parentElement.parentElement;
         let productName = productElement.querySelectorAll('.product-title')[0].textContent;
         let productPrice = productElement.querySelectorAll('.product-line-price')[0].textContent;
         productPrice = Number(productPrice);
         result.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
         products.add(productName);
         totalPrice += productPrice;

      } else if (Array.from(button.classList).indexOf('checkout') >= 0) {
         let list = Array.from(products).join(', ')
         result.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`
         checkoutDone=true;
      }
   })
}