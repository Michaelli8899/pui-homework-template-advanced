import React, { Component } from 'react';


//singular radio button
function RadioBtn(props) {

  return (
    <label className = 'selector-button'>
      <input  checked = {props.checked}
              type = 'radio' 
              id = {props.id} 
              name = {props.name} 
              value = {props.value} 
              className = 'radio-btn'
              onChange = {(event) => props.onChange(event)}/>
      <label htmlFor = {props.id}> {`${props.value}`} </label>
    </label>
  );  
    
  
}

// radio buttons in a group of 4 for pack size
class RadioBtnGroup extends Component {

  // get the value of the selected radio button and 
  // pass it in the handlePackSizeChange function
  handleChange = (e) => {
    let indexs = ['1', '3', '6', '12'];

    const selectedValue = parseFloat(e.target.value);
    this.props.btnObject.map((btn) => {
      btn.checked = false;
    })

    let idxOfSelected = indexs.indexOf(e.target.value);
    this.props.btnObject[idxOfSelected].checked = true;
    
    this.props.handlePackSizeChange(selectedValue);
  }


  render(){
    return(
    
      <div className = 'selector'>
        
        <label className = 'selector-title'>Pack size:</label>
        <div className = 'selector-buttons' >
          {/* look through all passed in radioButton Objects */}
          {this.props.btnObject.map((btn, idx) => {
            return (
              <RadioBtn id = {btn.id} 
                        key = {idx}
                        name = {btn.name} 
                        value = {btn.value} 
                        checked = {btn.checked}
                        onChange = {this.handleChange}/>
            );
          })}
        </div>
      </div>
    );
  }
}

// drop down menu for glazing
class DropDown extends Component {
  
  constructor(props){
    super(props);
  }
  // get the value of the selected item in the drop down and
  // pass it in the handleGlazingChange function
  handleChange = (e) => {
    // fromt stackOverFlow: https://stackoverflow.com/questions/30306486/get-selected-option-text-using-react-js
    let glazingName = this.props.options[e.nativeEvent.target.selectedIndex].option;
    this.props.handleGlazingChange(parseFloat(e.target.value), glazingName);
  }

  render(){
    return (
      <div className = 'selector'>
        <label className = 'selector-title'>Glazing:</label>
        <select name = 'glazing-options' 
                className = 'glaze-selector'
                defaultValue = {this.props.options[0].price}
                onChange = {(event) => this.handleChange(event)}>
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
class ShopItem extends Component {
  constructor(props){
    super(props);
    // all state variables
    // state will be pass to the parent component for cart flash information
    this.defaultPrice = parseFloat(props.price);
    
    let radioBtnObjects = this.createRadioObject();
    let dropdownOptions = this.createDropDownOptions();
    this.state= {
      imageURL: props.imageUrl,
      price: parseFloat(props.price),
      defaultPrice: parseFloat(props.price),
      packSizePriceChange: 1,
      glazingPriceChange: 0,
      typeName: props.itemName,
      glazingName: 'Keep original',
      radioBtnObjects: radioBtnObjects,
      radioBtnChecked: 0,
      dropdownOptions: dropdownOptions
    }

    
  }

  createDropDownOptions(){
    const original = {option: 'Keep original', 
      price: 0, key: 'keep-original'};
    const sugarMilk = {option: 'Sugar milk', 
      price: 0, key: 'sugar-milk'};
    const vanillaMilk = {option: 'Vanilla milk',
      price: 0.5, key: 'vanilla-milk'};
    const doubleChoco = {option: 'Double chocolate',
      price: 1.5,  key: 'double-chocolate'};
    
    const glazingOptions = [original, sugarMilk, vanillaMilk, doubleChoco];
    return [...glazingOptions];
  }
  // call in in constructor
  // initialize the values for each radioBtn Object and push into an Array (this.radioBtnObjects)
  createRadioObject(){
    let btns = [];
    //retreive the first-word of the altText
    let suffix = this.props.altText.split(' ')[0]
    
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
      btns.push(radioBtn);
    }

    return [...btns];
  }

  // pass down to the drop down menu component
  // retrieve the priceChange and selectedGlazingName and change state
  handleGlazingChange = (priceChange, selectedGlazingName) => {
    this.setState({
      glazingPriceChange: priceChange,
      glazingName: selectedGlazingName
    }, () => {
      // change price display after state is updated
      this.handlePriceChange();
    })
  }
  // pass down to the radio button component
  // retrieve the priceChange and change state
  handlePackSizeChange = (priceChange) => {
    this.setState({packSizePriceChange: priceChange}, () => {
      // change price display after state is updated
      this.handlePriceChange();
    })
  }

  // calculate the new price after glazing and pack size change
  handlePriceChange = () =>{
    // calculate the new price
    let newPrice = (this.state.defaultPrice + this.state.glazingPriceChange) * this.state.packSizePriceChange;
    // round to 2 decimal places
    
    newPrice = newPrice.toFixed(2);
    this.setState({
      price: newPrice
    });
  }

  // pass down from HomePage component
  handleAddToCart = () => {
    // pass the current state back to the parent component
    this.props.addToCart(this.state);
  }

  componentDidUpdate(prevProps) {
    if(typeof prevProps !== 'undefined' && typeof this.props !== 'undefined'){
      if(this.props.itemName != prevProps.itemName){
        let radiobtnObjects = [...this.state.radioBtnObjects];
        let resetDropdown = this.createDropDownOptions();
        this.setState((prevState) => ({
          defaultPrice: parseFloat(this.props.price),
          price: parseFloat(this.props.price),
          imageURL: this.props.imageUrl,
          packSizePriceChange: 1,
          glazingPriceChange: 0,
          typeName: this.props.itemName,
          radioBtnChecked: prevState.radioBtnChecked,
          glazingName: 'Keep original',
          radioBtnObjects: [...radiobtnObjects].map((btn, idx) => {
            console.log(btn);
            btn.checked = idx === 0 ? true : false;
            return btn;
          }),
          dropdownOptions: [...resetDropdown],
        }), () => {
          // console.log(this.state);
          this.handlePriceChange();
        })
      }
    }

  }

  render(){
    return (
    <div className = 'shop-item'>
      <img src = {this.props.imageUrl}
           alt = {this.props.altText} 
           className = 'item-img' 
           width = '400px'/>
      <p className = 'item-name'><b>{this.props.itemName}</b></p>   

      <div className = 'buttons'>
        {/* input all glazingOptions from public const variable */}
        <DropDown options = {this.state.dropdownOptions}
                  handleGlazingChange = {this.handleGlazingChange}/>

        <RadioBtnGroup  btnObject = {this.state.radioBtnObjects}
                        handlePackSizeChange = {this.handlePackSizeChange}/>
      </div>

      <div className = 'selector'>
        <p className = 'price-tag'>$ {this.state.price}</p>
        <button className = 'add-button highlight'
                onClick = {this.handleAddToCart}>Add to Cart</button>
      </div>
    </div>
    );
  }
}

export default ShopItem;