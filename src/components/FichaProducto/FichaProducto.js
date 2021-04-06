import React from 'react';
import {Link} from 'react-router-dom';

class FichaProducto extends React.Component {

    render() {
        const enlace = '/editproducto/' + this.props.datos.idb;
        return (
            <>
                <h2>Mi nombre es {this.props.datos.nombre}</h2>
                <p>Tengo {this.props.datos.edad} años y soy de {this.props.datos.poblacion}</p>
                <Link to={enlace}>Editar Producto</Link>
                <p><img src={this.props.datos.imagen} /></p>
            </>
        )
    }
}

export default FichaProducto;