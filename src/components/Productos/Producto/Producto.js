import React from 'react';
import clases from './Producto.module.css';
import Ponclase from '../../../hoc/Ponclase';


class Producto extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('<Producto> se ha montado');
    }
    componentWillUnmount() {
        console.log('<Producto> se va a desmontar');
    }
    render() {
        const aleatorio = Math.random();
        if (aleatorio > 1) {
            throw new Error('Este producto es problemática');
        }
        const enlace = '/productos/' + this.props.id;
        return (
            <Ponclase clases={clases.Producto}>
                <p><b>{this.props.nombre}</b> </p>
                <img src={this.props.foto} alt="foto_producto" width="200" height="200"/>
                <p><b>Precio: {this.props.precio}€</b> </p>
                <p>{this.props.children}</p>
                <button className={clases.BotonMenos} onClick={this.props.quitando}> <b>  - </b> </button>
                <li>{this.props.cantidad} </li>
                <button className={clases.BotonMas} onClick={this.props.añadiendo}> <b>  + </b> </button>
            </Ponclase>
        )
    }
}

export default Producto;