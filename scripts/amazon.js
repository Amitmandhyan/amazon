//we are going to create an array because an array represents a list and each product in our list has many diffrent values like an image ,text,price etc so for this we will use an object to represent an product because object = group multiple values togeather.
// const products = [{
//     image:'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating:{
//         stars:4.5,
//         count:87
//     },
//     priceCents:1090
// },{
//     image:'images/products/intermediate-composite-basketball.jpg',
//     name:'Intermediate Size Basketball',
//     rating:{
//         stars:4,
//         count:127
//     },
//     priceCents:2095
// },{
//     image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name:'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating:{
//         stars:4.5,
//         count:56
//     },
//     priceCents:799
// },{
//     image:'images/products/black-2-slot-toaster.jpg',
//     name:'2 Slot Toaster - Black',
//     rating:{
//         stars:5,
//         count:2197
//     },
//     priceCents:1899
// }];


// ..means to go out from the folder in which amazon.js file is present and then forward slash to go inside a folder .
import{cart , addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import { formatCurrency } from './utils/money.js';
let productsHTML = '';

//we will loop through this array for each object using for each method .
products.forEach((product)=>{
    productsHTML += `
            <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                $${formatCurrency(product.priceCents)}
            </div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">
                Add to Cart
            </button>
            </div>
    `;    
});
//now we created the html now lets puts this html on the page using dom.
document.querySelector('.js-products-grid').innerHTML = productsHTML;

function updateCartQuantity(){

    // NOW ILL loop through the cary array to make cart quantity interactive.
            let cartQuantity = 0;
            cart.forEach((cartItem)=>{
                    cartQuantity+=cartItem.quantity;
            });

            //now we have the total cart quantity now lets put it on the page using dom. and to put this on page we need an html element where we gona put this quntity so lets find that .

            document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;   
}
//button.dataset propety just gives us all the property which is attached to that button.
document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
        button.addEventListener('click',()=>{
            const productId = button.dataset.productId;
            addToCart(productId);
            updateCartQuantity();   
        });
});