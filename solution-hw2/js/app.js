////////////////////// ALL THE GLAZING OPTIONS //////////////////////

const original = {option: 'Keep original', 
    price: 0};

const sugarMilk = {option: 'Sugar milk', 
    price: 0};

const vanillaMilk = {option: 'Vanilla milk',
    price: 0.5};

const doubleChoco = {option: 'Double chocolate',
    price: 1.5};

const glazingOptions = [original, sugarMilk, vanillaMilk, doubleChoco];

////////////////////// ALL THE PACK SIZE OPTIONS //////////////////////

let single = {option: '1',
        size: 1};
let three = {option: '3',
        size: 3};
let six = {option: '6',
        size: 6};
let twelve = {option: '12',
        size: 12};

const packSizeOptionsArray = [single, three, six, twelve];


////////////////////// ROLL CLASS //////////////////////

class Roll {
    constructor(imgURL, type, price, glazing, packSize, elementID) {
        // different types of rolls
        this.imgURL = imgURL;
        this.type = type;
        this.price = price;

        this.defaultPrice = price; // for calculating the price
        this.glazing = glazing; // default "keep original"
        this.packSize = packSize; // default "1"
        this.priceChange = 0; // for calculating the price change for glazing, default 0

        //get the element ex: shop-item-1
        this.element = document.getElementById(elementID);

        // drop down menu for glazing
        this.selection = this.element.querySelector('.glaze-selector');
        // populate the drop down menu
        for (let i = 0; i < glazingOptions.length; i++) {
            var option = document.createElement('option');
            option.value = glazingOptions[i].price;
            option.innerHTML = glazingOptions[i].option;
    
            this.selection.appendChild(option);
        }
        this.selection.onchange = this.glazingChange.bind(this);
        

        // radio buttons for pack size
        const packSizeSelector = this.element.querySelector('.selector-buttons');
        //get the value for each radio button
        const packSizeOptions = packSizeSelector.querySelectorAll('input');
        // get the name to retrieve value
        this.packSizeSelectorName = packSizeOptions[0].name
        packSizeSelector.onchange = this.packSizeChange.bind(this);


        // add to cart button
        const addBtn = this.element.querySelector('.add-button');
        addBtn.onclick = this.addToCart.bind(this);

        // update the item upon initialization
        this.updateItem();
    }
    //updates price based on pack size radio button
    packSizeChange() {
        // from stack overflow
        // https://stackoverflow.com/questions/15839169/how-to-get-the-value-of-a-selected-radio-button
        this.packSize = this.element.querySelector(`input[name="${this.packSizeSelectorName}"]:checked`).value

        this.price = (this.defaultPrice + parseFloat(this.priceChange)) * this.packSize;
        this.updateItem();
    }

    //updates price based on glazing drop down menu
    glazingChange() {
        this.glazing = this.selection.options[this.selection.selectedIndex].text;
        this.priceChange = this.selection.value;
        this.price = (this.defaultPrice + parseFloat(this.priceChange)) * this.packSize;
        

        this.updateItem();
    }

    //update the item in the shop
    updateItem() {
        const img = this.element.querySelector('.item-img');
        const price = this.element.querySelector('.price-tag');
        const type = this.element.querySelector('.item-name');

        img.src = this.imgURL;
        type.innerHTML = `<b>${this.type}</b>`;
        price.innerText = `$ ${this.price.toFixed(2)}`;
    }

    //add the item to the cart object
    addToCart() {
        cart.addToCart(this);
    }
}

////////////////////// CART CLASS //////////////////////

class Cart {
    constructor(elementID) {
        //initialize as an empty array
        this.items = [];
        this.number = this.items.length; //default 0
        this.total = 0; // default total price 0
        this.elementID = elementID;

        this.element = document.getElementById(elementID);
        
        this.updateCart();
    }

    updateCart() {
        //html elements for displaying the cart
        const items = this.element.querySelector('.cart-items');
        const total = this.element.querySelector('.cart-total');


        // display depends on the no. of items
        if (this.total <= 1){
            items.innerText = `${this.number} item`;
        } else {
            items.innerText = `${this.number} items`;
        }

        // update the total price, fixed to 2 decimal places
        total.innerText = `$ ${this.total.toFixed(2)}`;
    }

    addToCart(item) {
        // add the item to the cart
        this.items.push(item);
        this.number++;
        this.total += item.price;

        // update display
        this.updateCart();
        // flash the cart item 
        this.flashCart(item);

    }

    flashCart(item) {
        // select HTML elements
        const flash = document.getElementById('cart-flash');
        const type = flash.querySelector('.type-name');
        const glaze = flash.querySelector('.glazing-name');
        const size = flash.querySelector('.pack-size');
        const price = flash.querySelector('.final-price');
    
        // update the text in the flash pop-up
        type.innerHTML = `<b>${item.type}</b>`;
        glaze.innerText = `${item.glazing}`;
        size.innerText = `Pack of ${item.packSize}`;
        price.innerText = `Price: $${item.price.toFixed(2)}`;

        // add the class to show the flash pop-up
        flash.classList.add('show');
        
        // remove the class after 3 seconds
        setTimeout(() => {
            flash.classList.remove('show');
            console.log('flash');
        }, "3000");
    }

}


////////////////////// CART OBJECT //////////////////////
const cart = new Cart('cart');


////////////////////// ROLL OBJECTS //////////////////////

const originalRoll = new Roll(
    "../assets/products/original-cinnamon-roll.jpg",
    "Original cinnamon roll",
    2.49,
    "Keep original",
    "1",
    "item-0"
)

const appleRoll = new Roll(
    "../assets/products/apple-cinnamon-roll.jpg",
    "Apple cinnamon roll",
    3.49,
    "Keep original",
    "1",
    "item-1"
)

const raisinRoll = new Roll(
    "../assets/products/raisin-cinnamon-roll.jpg",
    "Raisin cinnamon roll",
    2.99,
    "Keep original",
    "1",
    "item-2"
)

const walnutRoll = new Roll(
    "../assets/products/walnut-cinnamon-roll.jpg",
    "Walnut cinnamon roll",
    3.49,
    "Keep original",
    "1",
    "item-3"
)

const doubleChocoRoll = new Roll(
    "../assets/products/double-chocolate-cinnamon-roll.jpg",
    "Double-chocolate cinnamon roll",
    3.99,
    "Keep original",
    "1",
    "item-4"
)

const strawberryRoll = new Roll(
    "../assets/products/strawberry-cinnamon-roll.jpg",
    "Strawberry cinnamon roll",
    3.99,
    "Keep original",
    "1",
    "item-5"
)