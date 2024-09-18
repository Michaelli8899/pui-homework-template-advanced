import React, { Component } from 'react';


const original = {option: 'Keep original', 
  price: 0, key: 'keep-original'};
const sugarMilk = {option: 'Sugar milk', 
  price: 0, key: 'sugar-milk'};
const vanillaMilk = {option: 'Vanilla milk',
  price: 0.5, key: 'vanilla-milk'};
const doubleChoco = {option: 'Double chocolate',
  price: 1.5,  key: 'double-chocolate'};

const glazingOptions = [original, sugarMilk, vanillaMilk, doubleChoco];


class RadioBtn extends Component {
  constructor(props){
    super(props);

    // console.log(props);
  }

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

class RadioBtnGroup extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = 'selector'>
        
        <label className = 'selector-title'>Pack size:</label>
        <div className = 'selector-buttons'>
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

class DropDown extends Component {
  constructor(props){
    super(props);
    this.options = props.options;
  }
  
  render(){
    return (
      <div className = 'selector'>
        <label className = 'selector-title'>Glazing:</label>
        <select name = 'glazing-options' 
                className = 'glaze-selector'
                onChange = {this.glazingChang}>
          {this.options.map((option, index) => {
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

    // console.log('//////////////////////////////////')
    // console.log(this.radioBtnObjects);

  }

  glazingChange() {
    // this.glazing = this.selection.options[this.selection.selectedIndex].text;
    // this.priceChange = this.selection.value;
    // this.price = (this.defaultPrice + parseFloat(this.priceChange)) * this.packSize;
    // this.updateItem();
    this.price = '10';
    console.log('Change glazing');
  }

  // In constructor
  createRadioObject(){
    let suffix = this.altText.split(' ')[0]

    let radioBtnName =  `pack-size-${suffix}`;
    let radioBtnId = [];
    for (let i = 1; i <= 4; i++){
      radioBtnId.push(`btn-${i}-${suffix}`);
    }
    let radioBtnChecked = [true, false, false, false];
    let radioBtnValue = ['1', '3', '6', '12'];
    
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
    console.log(this.props.imageUrl);
    return (
    <div className = 'shop-item'>
      <img src = {this.props.imageUrl}
           alt = {this.altText} 
           className = 'item-img' 
           width = '400px'/>
      <p className = 'item-name'><b>{this.itemName}</b></p>   

      <div className = 'buttons'>
        <DropDown options = {glazingOptions}
                  glazingChang = {this.glazingChange}/>

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