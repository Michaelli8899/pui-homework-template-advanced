import React, { Component } from 'react';

class NavBar extends Component{
    render(){
        return(
            <div className = 'nav-bar'>
                <div className = 'nav-item'>
                    <a href = '/'>History</a>
                </div>
                <div className = 'nav-item'>
                    <a href = '/'>Learn About Strokes</a>
                </div>
            </div>
        );
    }
}

export default NavBar;