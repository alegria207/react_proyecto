import React from 'react';
import Producto from './Producto/Producto';
import ErrorBoundary from '../../hoc/ErrorBoundary';

class Productos extends React.Component {
    componentDidMount() {
        console.log('<Productos> se ha montado');
    }
    componentWillUnmount() {
        console.log('<Productos> se va a desmontar');
    }
    render() {
        return (
            <React.Fragment>
                {this.props.productos.map((producto, id) => {
                    return <ErrorBoundary key={id}><Producto nombre={producto.nombre}
                        edad={producto.edad}
                        id={producto.idb}
                        cambiando={(event) => this.props.escribir(event, id)}
                        borrando={() => this.props.borrar(id,producto.idb)} />
                    </ErrorBoundary>
                })}
            </React.Fragment>
        )
    }
}

export default Productos;