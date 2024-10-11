import React, { Component } from 'react';

class CartItem extends Component {
    constructor(props){
        super(props);  
    }

    handleRemove = (idx) => {
        console.log('remove', idx);
        this.props.onRemove(idx);
    }

    render(){
        return (
            <div className = 'cart-item'>
                <img src = {this.props.url}
                    alt = {this.props.name} 
                    className = 'cart-item-img' 
                    width = '75px'/>
                <p className = "cart-message">{this.props.name}</p>
                <p className = "cart-message">{`Glazing: ${this.props.glaze}`}</p>
                <p className = "cart-message">{`Pack Size: ${this.props.size}`}</p>
                <p className = "cart-message">{`$${this.props.price}`}</p>

                <a  className = "cart-remove"
                    onClick = {() => this.handleRemove(this.props.idx)}>
                    Remove
                </a>

            </div>
        )
    }
}

// name = {item.typeName}
// url = {item.imageURL}
// price = {item.price}
// size = {item.packSizePriceChange
// glaze = {item.glazingName}/>

class Cart extends Component {

    constructor(props){
        super(props);
        console.log('cart', this.props.cartItems);
    }

    handleRemove = (idx) => {
        this.props.handleRemove(idx);
    }


    render(){
        const items = this.props.cartItems.cartArray.length === 0 ? (
            <div>
                <div className = "cart-empty">
                    <p>{`The cart is empty!`}</p>
                </div>
            </div>
            
        ) : (
            <div>
                <div className = "cart-texts">
                    <p className = 'item-count'>{`Shopping Cart (${this.props.cartItems.cartItems} items)`}</p>
                    <p className = 'item-total'>{`Total: $ ${this.props.cartItems.cartTotal}`}</p>
                </div>
                <div className = 'all-cart-items'>
                    {this.props.cartItems.cartArray.map((item, idx) => {
                        return (
                            <CartItem   key = {idx} 
                                        idx = {idx}
                                        name = {item.typeName}
                                        url = {item.imageURL}
                                        price = {item.price}
                                        size = {item.packSizePriceChange}
                                        glaze = {item.glazingName}
                                        onRemove = {this.handleRemove}/>
                        )
                    })}
                </div>
            </div>
        )

        return (
            <div>
                <div className = "cart-strip"></div>
                    <div className = 'all-cart'>
                        {items}
                    </div>
                <div className = "cart-strip"></div>
            </div>
           
        );
    }
}

export default Cart;