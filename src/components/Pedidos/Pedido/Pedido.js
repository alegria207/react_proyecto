import React from 'react';
import clases from './Pedido.module.css';
import Ponclase from '../../../hoc/Ponclase';
import ProductosCarro from '../../ProductosCarro/ProductosCarro'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class Pedido extends React.Component {
    constructor(props) {
        super(props);
        this.elementoInput = React.createRef();
        //this.state = { elementoInput: React.createRef() };
    }
    componentDidMount() {
        console.log('<Pedido> se ha montado');
        //this.state.elementoInput.current.focus();
        //this.elementoInput.current.focus();
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
            // <div className={clases.Producto}>
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

Pedido.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    cambiando: PropTypes.func,
    borrando: PropTypes.func,
    quitando: PropTypes.func,
    añadiendo: PropTypes.func
}

export default Pedido;

/*
                <li><button onClick={this.props.borrando}>Borrar</button> </li>

        return (
            // <div className={clases.Producto}>
            <Ponclase clases={clases.Pedido}>
                <h5> Pedido {this.props.idb}</h5>
                <p><b>{this.props.nombre}</b> </p>
                <img src={this.props.foto} alt="foto_producto" width="200" height="200"/>
                <p><b>Precio: {this.props.precio}€</b> </p>
                <p>{this.props.children}</p>
                <Link to={enlace}>Ver detalles</Link>
            </Ponclase>
        )




        return (
            // <div className={clases.Producto}>
            <Ponclase clases={clases.Producto}>
                <div>
                    <b>{this.props.nombre}</b>
                </div>
                <img src={this.props.foto} alt="foto_producto" width="200" height="200"/>
                <p>Precio: {this.props.precio}€</p>
                <p>{this.props.children}</p>
                <button onClick={this.props.borrando}>Borrar</button>
                <button onClick={this.props.quitando}> - </button>
                 {this.props.cantidad} 
                <button onClick={this.props.añadiendo}> + </button>
                <Link to={enlace}>Ver detalles</Link>

            </Ponclase>
        )

*/

/*
        return (
            // <div className={clases.Producto}>
            <Ponclase clases={clases.Producto}>
                <p>Soy una persona y mi nombre es {this.props.nombre}.</p>
                <p>Y mi edad es {this.props.edad}.</p>
                <p>{this.props.children}</p>
                <input ref={this.elementoInput} type="text" onChange={this.props.cambiando} value={this.props.nombre} />
                <button onClick={this.props.borrando}>Borrar</button>
                <Link to={enlace}>Ver detalles</Link>

            </Ponclase>
        )

*/