import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    handleSetSearchTerm = (e) => {
        this.setState(
            {search: e.target.value}
        );
    }

    handleSubmitButton = () => {
        this.props.handleSearch(this.state.search);
    }

    handleSort = (e) => {
        this.props.handleSort(e.target.value);
    }

    render(){
        return (
            <div id = "search-bar">
                <div className = "search-item">
                    <input  type = "text" 
                            id = "search-input" 
                            value = {this.state.search}
                            onChange = {(e) => this.handleSetSearchTerm(e)}/>
                    <button type = 'button' 
                            id = 'submit-btn'
                            onClick = {this.handleSubmitButton}>
                        Submit
                    </button>
                </div>

                <div className = 'sort-item'>
                    <p className = 'sort-title'>Sort By:</p>
                    <select className = 'sort-select' 
                            onChange = {(e) => this.handleSort(e)}>
                        <option value = 'default'>Default</option>
                        <option value = 'name'>Name</option>
                        <option value = 'price'>Base Price</option>
                    </select>
                </div>
            </div>
        );
    }

}

export default SearchBar;