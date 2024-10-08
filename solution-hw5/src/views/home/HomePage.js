
import ShopItem from './ShopItem.js';
import NavBar from './NavBar.js';
import SearchBar from './SearchBar.js';
import Cart from './Cart.js';
import React,{ Component } from 'react';



class HomePage extends Component {
    constructor(props){
        super(props);
        this.items = [
                {
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
                },
                {
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
            },
            searchTerm: '',
            sortTerm: '',
            showCart: false,
        }
    }

    setSearchTerm = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm
        })
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
            console.log(this.state)
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

    handleSearch = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm
        })
    }

    handleSort = (sortTerm) => {
        this.setState({
            sortTerm: sortTerm
        })
    }

    handleRemove = (idx) => {
        let currentCartArray = [...this.state.cart.cartArray];
        currentCartArray.splice(idx, 1);
        this.setState({
            cart: {
                cartArray: currentCartArray
            }
        }, () => {
            this.handleCartChanges();
        })
    }

    handleShowCart= () => {
        console.log(this.state)
        console.log('show cart', this.state.showCart);
        let newShowCart = !this.state.showCart;
        console.log('new show cart', newShowCart);
        this.setState({
            showCart: newShowCart
        })
    }

    render(){
        let row = this.items.filter((item) => {
            let searchTerm = this.state.searchTerm.toLowerCase();
            let itemName = item.typeName.toLowerCase();
            if(this.state.searchTerm === ''){
                return true;
            }
            
            return itemName.includes(searchTerm);
        });



        const newRow = [...row].sort((a, b) => {
            if(this.state.sortTerm === 'price'){
                if(parseFloat(a.price) === parseFloat(b.price)){
                    return b.typeName.localeCompare(a.typeName)
                }else{
                    return parseFloat(a.price) - parseFloat(b.price);
                }
                
            }else if (this.state.sortTerm === 'name'){
                return a.typeName.localeCompare(b.typeName);
            }
            return 0;
        })


        let items = row.length === 0 ? (
            <div className = "message-bar">
                <p className = "center-message">No Match!</p>
            </div>
        ) : (
            <div className = "shop-row">
                {newRow.map((item, idx) => {
                    return (
                        <ShopItem   imageUrl = {item.imageUrl}
                                    altText = {item.typeName}
                                    itemName = {item.typeName}
                                    price = {item.price}
                                    defaultPrice = {item.price}
                                    addToCart = {this.addToCart}
                                    key = {idx}/>
                    )
                })}
            </div>
        )

        const cart = this.state.showCart ? (
            <div>
                <Cart   cartItems = {this.state.cart}
                        handleRemove = {this.handleRemove}/>
            </div>
        ) : (
            <div>

            </div>
        )
    
        return (
            <div>
                
                {/* navigaiton bar */}
                <NavBar imageUrl = {`${process.env.PUBLIC_URL}/assets/logo/logo-01.svg`}
                        cart = {this.state.cart}
                        cartFlash = {this.state.cartFlash}
                        showCart = {this.handleShowCart}/>

                <SearchBar  handleSearch = {this.handleSearch}
                            handleSort = {this.handleSort}/>
            
                {cart}

                <body>
                    <main>   
                    {/* renders ShopItem Component */}
                    
                    {items}
                    </main>
                            
                </body>
            </div>
        );
    }
}

export default HomePage;