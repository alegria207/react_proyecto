import React from 'react';
import clases from './ProductoCarro.module.css';
import Ponclase from '../../../hoc/Ponclase';


class ProductoCarro extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('<ProductoCarro> se ha montado');
    }
    componentWillUnmount() {
        console.log('<ProductoCarro> se va a desmontar');
    }
    render() {
        const aleatorio = Math.random();
        if (aleatorio > 1) {
            throw new Error('Este producto es problemática');
        }
        return (
            <Ponclase clases={clases.ProductoCarro}>
                <li>  x{this.props.cantidad}</li>
                <img src={this.props.foto} alt="foto_producto" width="100" height="100"/>
                <li> {this.props.nombre}  ({this.props.precio}€) </li>
                <p>{this.props.children}</p>
            </Ponclase>
        )
    }
}

export default ProductoCarro;