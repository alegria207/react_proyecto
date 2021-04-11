import React from 'react';
import ProductoCarro from './ProductoCarro/ProductoCarro';
import ErrorBoundary from '../../hoc/ErrorBoundary';

class ProductosCarro extends React.Component {
    componentDidMount() {
        console.log('<ProductosCarro> se ha montado');
    }
    componentWillUnmount() {
        console.log('<ProductosCarro> se va a desmontar');
    }
    render() {
        return (
            <React.Fragment>
                {this.props.productosCarro.map((productoCarro, id) => {
                    return <ErrorBoundary key={id}><ProductoCarro nombre={productoCarro.nombre}
                        precio={productoCarro.precio}
                        foto={productoCarro.foto}
                        id={productoCarro.idb}
                        cantidad={productoCarro.cantidad}/>
                    </ErrorBoundary>
                })}
            </React.Fragment>
        )
    }
}

export default ProductosCarro;