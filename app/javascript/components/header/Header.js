import React, { Component } from 'react';
import './header.scss';

class Header extends Component{

    render(){
        return(
            <header className='top-bar _fixed'>
                <div className="-container">
                    <h2>Rails Casts</h2>
                </div>
            </header>
        );
    }
}

export default Header;