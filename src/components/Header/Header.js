import React from 'react';
import clases from './Header.module.css'
import Ponclase from '../../hoc/Ponclase';

class Header extends React.Component {

    render() {

        return (
            <Ponclase clases={clases.Header}>
                <h1>{this.props.titulo}</h1>
            </Ponclase>
        )
    }
}

export default Header;