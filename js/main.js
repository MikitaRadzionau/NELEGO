// cart
let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'Red Tshirt',
        tag:'redtshirt',
        price:20,
        inCart:0
    },
    {
        name:'White Tshirt',
        tag:'whitetshirt',
        price:68,
        inCart:0
    },
    {
        name:'Black Tshirt',
        tag:'blacktshirt',
        price:78,
        inCart:0
    },
    {
        name:'Black2 Tshirt',
        tag:'black2tshirt',
        price:100,
        inCart:0
    },
    {
        name:'Messi Tshirt',
        tag:'messitshirt',
        price:70,
        inCart:0
    },
    {
        name:'Blue Hoodie',
        tag:'bluehoodie',
        price:25,
        inCart:0
    },
    {
        name:'Grey Hoodie',
        tag:'greytshirt',
        price:55,
        inCart:0
    },
    {
        name:'White Tshirt',
        tag:'whitetshirt',
        price:80,
        inCart:0
    },
]

for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',() =>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNambers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}
// счетчик корзины
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems)
    // console.log("My cartItem are",cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        } 
        cartItems[product.tag].inCart +=1;
    }else{
        product.inCart = 1;
        cartItems = {
            [product.tag]:product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
// общая стоимость 
function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    console.log("my cartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost+product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}
// отображение имеющихся товаров в корзине 
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if(cartItems && productContainer ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle" id="remove-cart-btn"></ion-icon>
                <img src="/img/products/${item.tag}">
                
                <span>${item.name}</span>
            </div>
            <div class="c_price">$${item.price},00</div>
            <div class="c_quantity">
                <ion-icon name="caret-back-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="caret-forward-circle-outline"></ion-icon>
            </div>
            <div class="c_total">
            $${item.inCart * item.price},00
                </div>
            `
        });

        productContainer.innerHTML +=`
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                basket total
            </h4>
            <h4>
            $${cartCost},00
            </h4>
        `
    
    }
}


// Like
let like = document.querySelectorAll('.liked');

onLoadCartNumbers();
displayCart();//каждый раз когда загружаем стр она запускается
deleteCart();