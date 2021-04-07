import React from 'react';
import {Link} from 'react-router-dom';

class FichaProducto extends React.Component {

    render() {
        const enlace = '/editproducto/' + this.props.datos.idb;
        return (
            <>
                <div>
                    <b>{this.props.datos.nombre}</b>
                </div>
                <img src={this.props.datos.foto} alt="foto_producto" width="200" height="200"/>
                <p>Precio: {this.props.datos.precio}€</p>
                <Link to={enlace}>Editar Producto</Link>
            </>
        )
    }
}

export default FichaProducto;