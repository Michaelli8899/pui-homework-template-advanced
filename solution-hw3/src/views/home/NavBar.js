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
                <a className="nav-item ">CART</a>
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
