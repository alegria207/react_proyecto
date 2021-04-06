import React from 'react';
import clases from './Header.module.css'
import Ponclase from '../../hoc/Ponclase';

class Header extends React.Component {

    render() {
        const estilo = {
            backgroundColor: 'white',
            border: '1px solid blue'
        };
        const estilos = [];
        if(this.props.numeropersonas<3){
            estilos.push(clases.rojo);
        }
        if(this.props.numeropersonas<2){
            estilos.push(clases.negrita);
        }
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