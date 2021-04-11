import React from 'react';
import clases from './Pedido.module.css';
import Ponclase from '../../../hoc/Ponclase';
import ProductosCarro from '../../ProductosCarro/ProductosCarro'
import {Link} from 'react-router-dom';


class Pedido extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('<Pedido> se ha montado');
    }
    componentWillUnmount() {
        console.log('<Pedido> se va a desmontar');
    }

    calcularTotalPedido = () => {
        let total = 0;
        for(let i in this.props.carrito){
            total += this.props.carrito[i].cantidad*this.props.carrito[i].precio
        }
        total = Number((total).toFixed(2))
        return total
    }

    render() {
        const aleatorio = Math.random();
        if (aleatorio > 1) {
            throw new Error('Este pedido es problemática');
        }

        let listaproductoscarro = null;

        listaproductoscarro = (
            <ProductosCarro
              productosCarro={this.props.carrito} />
          )

        const enlace = '/pedidos_realizados/' + this.props.id;
        return (
            <Ponclase clases={clases.Pedido}>
                <h5> Pedido id: {this.props.id}</h5>
                {listaproductoscarro}
                <p>Total: {this.calcularTotalPedido()}€ </p>
                <p>{this.props.children}</p>

                <li><button onClick={() => { if (window.confirm('¿Estás seguro de que quieres borrar este pedido?')) this.props.borrando() } }>Borrar</button> </li>
                <li><Link to={enlace}>Ver detalles</Link> </li>
            </Ponclase>
        )
    }
}

export default Pedido;