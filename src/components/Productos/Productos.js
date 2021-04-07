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
                        cambiando={(event) => this.props.escribir(event, id)}
                        borrando={() => this.props.borrar(id,producto.idb)} 
                        quitando={() => this.props.quitar(id,producto.idb)}
                        añadiendo={() => this.props.añadir(id,producto.idb)}/>
                    </ErrorBoundary>
                })}
            </React.Fragment>
        )
    }
}

export default Productos;