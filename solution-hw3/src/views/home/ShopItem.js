import React, { Component } from 'react';

// constants across all shop items
const original = {option: 'Keep original', 
  price: 0, key: 'keep-original'};
const sugarMilk = {option: 'Sugar milk', 
  price: 0, key: 'sugar-milk'};
const vanillaMilk = {option: 'Vanilla milk',
  price: 0.5, key: 'vanilla-milk'};
const doubleChoco = {option: 'Double chocolate',
  price: 1.5,  key: 'double-chocolate'};

const glazingOptions = [original, sugarMilk, vanillaMilk, doubleChoco];

//singular radio button
class RadioBtn extends Component {

  render(){
    
      return (
        <label className = 'selector-button'>
          <input  defaultChecked = {this.props.checked}
                  type = 'radio' 
                  id = {this.props.id} 
                  name = {this.props.name} 
                  value = {this.props.value} 
                  className = 'radio-btn'/>
          <label htmlFor = {this.props.id}> {`${this.props.value}`} </label>
        </label>
      );
    
  }
}

// radio buttons in a group of 4 for pack size
class RadioBtnGroup extends Component {

  render(){
    return (
      <div className = 'selector'>
        
        <label className = 'selector-title'>Pack size:</label>
        <div className = 'selector-buttons'>
          {/* look through all passed in radioButton Objects */}
          {this.props.btnObject.map((btn) => {
            return (
              <RadioBtn id = {btn.id} 
                        key = {btn.id}
                        name = {btn.name} 
                        value = {btn.value} 
                        checked = {btn.checked}/>
            );
          })}
        </div>
      </div>
    );
  }
}

// drop down menu for glazing
class DropDown extends Component {
  
  render(){
    return (
      <div className = 'selector'>
        <label className = 'selector-title'>Glazing:</label>
        <select name = 'glazing-options' 
                className = 'glaze-selector'>
          {/* add in all glazing options */}
          {this.props.options.map((option) => {
            return (
              <option 
                      value = {option.price}
                      key = {option.key}>
                {`${option.option}`}
              </option>
            );
          })}
        </select>
    </div>
    );
  }
}

//main component for each shop item
class ShopItem extends Component /*= (imageURL, altText, itemName) =>*/ {
  constructor(props){
    super(props);
    this.imageURL = props.imageURL;
    this.altText = props.altText;
    this.itemName = props.itemName;

    this.price = props.price;
    this.defaultPrice = props.price;
    this.priceChange = 0;
    this.glazing = props.glazing;
    
    this.radioBtnObjects = []
    this.createRadioObject();
  }

  // In constructor
  // initialize the values for each radioBtn Object and push into an Array (this.radioBtnObjects)
  createRadioObject(){
    //retreive the first-word of the altText
    let suffix = this.altText.split(' ')[0]
    
    //initialize the name of the btn to ensure grouping
    let radioBtnName =  `pack-size-${suffix}`;
    let radioBtnId = [];
    //initialize id by adding suffix to the end
    for (let i = 1; i <= 4; i++){
      radioBtnId.push(`btn-${i}-${suffix}`);
    }
    //initialize the initial check value for each button
    let radioBtnChecked = [true, false, false, false];
    //initialize each value
    let radioBtnValue = ['1', '3', '6', '12'];
    
    //create each radioBtn Object and push to the Array
    for (let i = 0; i < 4; i++){
      let radioBtn = new Object();
      radioBtn.id = radioBtnId[i];
      radioBtn.name = radioBtnName;
      radioBtn.value = radioBtnValue[i];
      radioBtn.checked = radioBtnChecked[i];
      this.radioBtnObjects.push(radioBtn);
    }
  }

  render(){
    return (
    <div className = 'shop-item'>
      <img src = {this.props.imageUrl}
           alt = {this.altText} 
           className = 'item-img' 
           width = '400px'/>
      <p className = 'item-name'><b>{this.itemName}</b></p>   

      <div className = 'buttons'>
        {/* input all glazingOptions from public const variable */}
        <DropDown options = {glazingOptions}/>

        <RadioBtnGroup btnObject = {this.radioBtnObjects}/>
      </div>

      <div className = 'selector'>
        <p className = 'price-tag'>$ {this.price}</p>
        <button className = 'add-button highlight'>Add to Cart</button>
      </div>
    </div>
    );
  }
}

export default ShopItem;