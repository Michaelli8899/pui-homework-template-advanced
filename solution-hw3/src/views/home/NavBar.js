import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    return (
      <nav>
        <div id = "nav-left">
          <img src= {this.props.imageUrl} alt="Bun Bun bake shop" id="logo"/>
        </div>
        <div id = "nav-right">
          <div className = "nav-top">
            <div className = "nav-items"> 
              <div className = "nav-item">  
                <a className="highlight">PRODUCTS</a>
              </div>
              <div id = "cart">
                <a className="nav-item ">CART</a>
                {/* <p className="cart-items"> item </p>
                <p className="cart-total"> Total: $ 22.45 </p> */}

                <div id = "cart-flash">
                  <p>Added to cart</p>
                  <p>&nbsp</p>
                  <p className = "type-name"><b>Raisin cinnamon roll</b></p>
                  <p className = "glazing-name">Double chocolate glazing</p>
                  <p className = "pack-size">Pack of 6</p>
                  <p className = "final-price">Price: $22.45</p>
                </div>
              </div>

            </div>
          </div>
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


    // <!-- <nav>
    //   <div id = "nav-left">
    //     <img src="../assets/logo/logo-01.svg" alt="Bun Bun bake shop" id="logo">
    //   </div>


    //   <div id = "nav-right">
    //     <div class = "nav-top">
    //       <div class = "nav-items"> 
    //         <div class = "nav-item">  
    //             <p class="highlight">PRODUCTS</p>
    //         </div>
            
    //         <div id = "cart">
    //             <p class="nav-item ">CART</p>
    //             <p class="cart-items"> item </p>
    //             <p class="cart-total"> Total: $ 22.45 </p>

    //             <div id = "cart-flash">
    //                 <p>Added to cart</p>
    //                 <p>&nbsp</p>
    //                 <p class = "type-name"><b>Raisin cinnamon roll</b></p>
    //                 <p class = "glazing-name">Double chocolate glazing</p>
    //                 <p class = "pack-size">Pack of 6</p>
    //                 <p class = "final-price">Price: $22.45</p>
    //             </div>
    //         </div>
            
            
    //       </div>
          
    //     </div>


    //     <div class="strip"></div>

    //     <div class="nav-bottom">
    //       <p class="website-title">Our hand-made cinnamon rolls</p>
    //     </div>
        
    //   </div>
    // </nav> -->