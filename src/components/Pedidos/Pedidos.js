import React from 'react';
import Pedido from './Pedido/Pedido';
import ErrorBoundary from '../../hoc/ErrorBoundary';

class Pedidos extends React.Component {
    componentDidMount() {
        console.log('<Pedidos> se ha montado');
    }
    componentWillUnmount() {
        console.log('<Pedidos> se va a desmontar');
    }
    render() {
        return (
            <React.Fragment>
                {this.props.pedidos.map((pedido, id) => {
                    return <ErrorBoundary key={id}><Pedido nombre={pedido.nombre}
                        apellido1={pedido.apellido1}
                        apellido2={pedido.apellido2}
                        telefono={pedido.telefono}
                        mail={pedido.mail}
                        direccion={pedido.direccion}
                        id={pedido.idb}
                        carrito={pedido.carrito}
                        borrando={() => this.props.borrar(id,pedido.idb)}/>
                    </ErrorBoundary>
                })}
            </React.Fragment>
        )
    }
}

export default Pedidos;