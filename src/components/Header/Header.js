import React from 'react';
import clases from './Header.module.css'
import Ponclase from '../../hoc/Ponclase';

class Header extends React.Component {

    render() {

        return (
            // <div className={clases.Header}>
            <Ponclase clases={clases.Header}>
                <h1>{this.props.titulo}</h1>
                {/* <p className={estilos.join(' ')}>Parece que funciona</p> */}
                {/* <button style={estilo} onClick={this.props.cambiandounnombre}>Cambio un nombre</button>
                <button onClick={this.props.cambiaLogin}>Login ON-OFF</button> */}
            {/* </div> */}
            </Ponclase>
        )
    }
}

export default Header;