import React from 'react';
import clases from './FichaPedido.module.css';

class FichaPedido extends React.Component {

    render() {
        return (
            <>
                <div className={clases.FichaPedido}>
                    <p><b>Nombre: </b> {this.props.datos.nombre}</p>
                    <p><b>Apellido1: </b> {this.props.datos.apellido1}</p>
                    <p><b>Apellido2: </b>  {this.props.datos.apellido2}</p>
                    <p><b>Teléfono: </b> {this.props.datos.telefono}</p>
                    <p><b>Mail: </b> {this.props.datos.mail}</p>
                    <p><b>Dirección de envío: </b>{this.props.datos.direccion}</p>
                </div>

            </>
        )
    }
}

export default FichaPedido;