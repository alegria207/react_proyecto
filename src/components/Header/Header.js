import React from 'react';
import clases from './Header.module.css'

class Header extends React.Component {

    render() {
        return (
            <div className={clases.Header}>
                <h1>{this.props.title}</h1>
            </div>
        )
    
    }
}

export default Header;