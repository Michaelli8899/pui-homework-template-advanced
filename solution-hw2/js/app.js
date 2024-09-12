////////////////////// ALL THE GLAZING OPTIONS //////////////////////

const original = {option: 'Keep original', 
    price: 0};

const sugarMilk = {option: 'Sugar milk', 
    price: 0};

const vanillaMilk = {option: 'Vanilla milk',
    price: 0.5};

const doubleChoco = {option: 'Double chocolate',
    price: 1.5};

////////////////////// ALL THE PACK SIZE OPTIONS //////////////////////

let single = {option: '1',
        size: 1};
let three = {option: '3',
        size: 3};
let six = {option: '6',
        size: 6};
let twelve = {option: '12',
        size: 12};

const glazingOptions = [original, sugarMilk, vanillaMilk, doubleChoco];


////////////////////// ROLL CLASS //////////////////////

class Roll {
    constructor(imgURL, type, price, glazing, packSize, elementID) {
        this.imgURL = imgURL;
        this.type = type;
        this.defaultPrice = price;
        this.price = price;
        
        this.glazing = glazing;

        this.packSize = packSize;
        this.priceChange = 0;

        this.element = document.getElementById(elementID);

        this.selection = this.element.querySelector('.glaze-selector');

        this.packSizeSelector = this.element.querySelector('.selector-buttons');
        this.packSizeOptions = this.packSizeSelector.querySelectorAll('input');
        this.packSizeSelectorName = this.packSizeOptions[0].name
        
        const addBtn = this.element.querySelector('.add-button');

        addBtn.onclick = this.addToCart.bind(this);

        for (let i = 0; i < glazingOptions.length; i++) {
            var option = document.createElement('option');
            option.value = glazingOptions[i].price;
            option.innerHTML = glazingOptions[i].option;
    
            this.selection.appendChild(option);
        }

        // console.log(this.packSizeSelector.querySelector('input').name);


        this.selection.onchange = this.glazingChange.bind(this);
        this.packSizeSelector.onchange = this.packSizeChange.bind(this);

        this.updateItem();
    }
    packSizeChange() {
        this.packSize = this.element.querySelector(`input[name="${this.packSizeSelectorName}"]:checked`).value

        this.price = (this.defaultPrice + parseFloat(this.priceChange)) * this.packSize;
        this.updateItem();
    }

    glazingChange() {
        this.glazing = this.selection.options[this.selection.selectedIndex].text;
        this.priceChange = this.selection.value;
        this.price = (this.defaultPrice + parseFloat(this.priceChange)) * this.packSize;
        

        this.updateItem();
    }

    updateItem() {
        const img = this.element.querySelector('.item-img');
        const price = this.element.querySelector('.price-tag');
        const type = this.element.querySelector('.item-name');

        img.src = this.imgURL;
        type.innerHTML = `<b>${this.type}</b>`;
        price.innerText = `$ ${this.price.toFixed(2)}`;
    }

    addToCart() {
        cart.addToCart(this);
    }
}

class Cart {
    constructor(elementID) {
        this.items = [];
        this.number = this.items.length;
        this.total = 0;
        this.elementID = elementID;

        this.element = document.getElementById(elementID);
        // console.log(this.element);
        for(let i = 0; i < this.items.length; i++) {
            this.total += this.items[i].price;
        }
        // console.log('cart')
        // console.log(this.element);
        
        this.updateCart();
    }

    updateCart() {
        const items = this.element.querySelector('.cart-items');
        const total = this.element.querySelector('.cart-total');

        if (this.total <= 1){
            items.innerText = `${this.number} item`;
        } else {
            items.innerText = `${this.number} items`;
        }

        total.innerText = `$ ${this.total.toFixed(2)}`;
    }

    addToCart(item) {
        this.items.push(item);
        this.number++;
        this.total += item.price;

        this.updateCart();

        const flash = document.getElementById('cart-flash');
        const type = flash.querySelector('.type-name');
        const glaze = flash.querySelector('.glazing-name');
        const size = flash.querySelector('.pack-size');
        const price = flash.querySelector('.final-price');
    
        console.log(item.glazing)
        type.innerHTML = `<b>${item.type}</b>`;
        glaze.innerText = `${item.glazing}`;
        size.innerText = `Pack of ${item.packSize}`;
        price.innerText = `Price: $${item.price.toFixed(2)}`;

        flash.classList.add('show');
        
        setTimeout(() => {
            flash.classList.remove('show');
            console.log('flash');
        }, "3000");
    }

}

const cart = new Cart('cart');



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




////////////////////// ADD TO CART //////////////////////


