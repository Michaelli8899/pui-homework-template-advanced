import React, { Component } from 'react';

class NavBar extends Component {



  render(){
    return (
      <nav>
        <div id = "nav-left">
          {/* logo image */}
          <img src= {this.props.imageUrl} alt="Bun Bun bake shop" id="logo"/>
        </div>
        <div id = "nav-right">
          <div className = "nav-top">
            <div className = "nav-items"> 
              {/* PRODUCT CART */}
              <div className = "nav-item">  
                <a className="highlight">PRODUCTS</a>
              </div>
              <div id = "cart">
                <div className = "nav-item">  
                  <a className="highlight"
                      onClick = {this.props.showCart}>
                    CART
                  </a>
                </div>
                <p className="cart-items"> {this.props.cart.cartItems <= 1 ? `${this.props.cart.cartItems} Item` : `${this.props.cart.cartItems} Items` } </p>
                <p className="cart-total"> {`Total: $ ${this.props.cart.cartTotal}`} </p>
              </div>


              <div id = "cart-flash"  className = {this.props.cartFlash.hidden}>
                    <p>Added to cart</p>
                    <p>{'\u00A0'}</p>
                    <p className = "type-name"><b>{`${this.props.cartFlash.typeName}`}</b></p>
                    <p className = "glazing-name">{`${this.props.cartFlash.glazingName} glazing`}</p>
                    <p className = "pack-size">{`Pack of ${this.props.cartFlash.packSize}`}</p>
                    <p className = "final-price">{`Price: $${this.props.cartFlash.price}`}</p>
              </div>

            </div>
          </div>
          {/* back stripe */}
          <div className="strip"></div>
          <div className="nav-bottom">
            <p className="website-title">Our hand-made cinnamon rolls</p>
          </div>
        </div>
      </nav>
      
      
    )
  }
}

export default NavBar;
