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
                        precio={producto.precio}
                        foto={producto.foto}
                        id={producto.idb}
                        cantidad={producto.cantidad}
                        quitando={() => this.props.quitar(id)}
                        añadiendo={() => this.props.añadir(id)}/>
                    </ErrorBoundary>
                })}
            </React.Fragment>
        )
    }
}

export default Productos;