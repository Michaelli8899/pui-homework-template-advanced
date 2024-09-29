
import ShopItem from './ShopItem.js';
import NavBar from './NavBar.js';
import React,{ Component } from 'react';



class HomePage extends Component {
    constructor(props){
        super(props);
        this.items = {
            row1: [{
                    typeName: 'Original cinnamon roll',
                    price: 2.49,
                    imageUrl: `${process.env.PUBLIC_URL}/assets/products/original-cinnamon-roll.jpg`
                },
                {
                    typeName: 'Apple cinnamon roll',
                    price: 3.49,
                    imageUrl: `${process.env.PUBLIC_URL}/assets/products/apple-cinnamon-roll.jpg`
                },
                {
                    typeName: 'Raisin cinnamon roll',
                    price: 2.99,
                    imageUrl: `${process.env.PUBLIC_URL}/assets/products/raisin-cinnamon-roll.jpg`
                }],
            row2: [{
                    typeName: 'Walnut cinnamon roll',
                    price: 3.49,
                    imageUrl: `${process.env.PUBLIC_URL}/assets/products/walnut-cinnamon-roll.jpg`
                },
                {
                    typeName: 'Double-chocolate cinnamon roll',
                    price: 3.99,
                    imageUrl: `${process.env.PUBLIC_URL}/assets/products/double-chocolate-cinnamon-roll.jpg`
                },
                {
                    typeName: 'Strawberry cinnamon roll',
                    price: 3.99,
                    imageUrl: `${process.env.PUBLIC_URL}/assets/products/strawberry-cinnamon-roll.jpg`
                }]
        }
        // initialize state for cart and flash information
        this.state = {
            cart: {
                cartArray: [],
                cartItems: 0,
                cartTotal: 0
            },
            cartFlash: {
                hidden: '',
                typeName: '',
                glazingName: '',
                packSize: '',
                finalPrice: 0
            }
        }
    }

    // passed down to ShopItem component
    // retrieve the state from the ShopItem component and update the cart state
    addToCart = (item) => {
        
        let currentCartArray = [...this.state.cart.cartArray, item];
        
        // update cartArray with the new item
        // update cartFlash with the new item information
        this.setState({
            cart: {
                cartArray: currentCartArray,
            },
            cartFlash: {
                hidden: 'show',
                typeName: item.typeName,
                glazingName: item.glazingName,
                packSize: item.packSizePriceChange,
                price: item.price
            }
        }, () => {
            //update cart information from the updated cart state    
            this.handleCartChanges();
            // flash the cart information for 3 seconds
            this.handleCartFlash();
        })
    }

    // update the cart information
    // update number of items and total price
    handleCartChanges = () => {
    
        let currentCartArray = [...this.state.cart.cartArray];
        let currentCartItems = this.state.cart.cartArray.length;
        let currentCartTotal = 0;

        for (let i = 0; i < currentCartArray.length; i++){
            currentCartTotal += parseFloat(currentCartArray[i].price);
        }

        this.setState({
            cart: {
                cartArray: currentCartArray,
                cartItems: currentCartItems,
                cartTotal: currentCartTotal.toFixed(2)
            }
        })
    }

    //flash the cart information for 3 seconds
    handleCartFlash = () => {
        setTimeout(() => {
            this.setState({
                cartFlash: {
                    hidden: ''
                }
            })
        }, 3000)
    }

    render(){
    return (
        <div>
            <div>
                {/* navigaiton bar */}
                <NavBar  imageUrl = {`${process.env.PUBLIC_URL}/assets/logo/logo-01.svg`}
                         cart = {this.state.cart}
                         cartFlash = {this.state.cartFlash}/>
            </div>
            <body>
                <main>
                {/* renders ShopItem Component */}
                <div className = "shop-row">
                    {this.items.row1.map((item, idx) => {
                        return (
                            <ShopItem   imageUrl = {item.imageUrl}
                                        altText = {item.typeName}
                                        itemName = {item.typeName}
                                        price = {item.price}
                                        addToCart = {this.addToCart}
                                        key = {idx}/>
                        )
                    })}
                </div>
                <div className = "shop-row">
                    {this.items.row2.map((item, idx) => {
                        return (
                            <ShopItem   imageUrl = {item.imageUrl}
                                        altText = {item.typeName}
                                        itemName = {item.typeName}
                                        price = {item.price}
                                        addToCart = {this.addToCart}
                                        key = {idx}/>
                        )
                    })}
                </div>
                </main>
                        
            </body>
        </div>
    );
    }
}

export default HomePage;