import React from 'react';
import clases from './ProductoCarro.module.css';
import Ponclase from '../../../hoc/Ponclase';
import PropTypes from 'prop-types';


class ProductoCarro extends React.Component {
    constructor(props) {
        super(props);
        this.elementoInput = React.createRef();
        //this.state = { elementoInput: React.createRef() };
    }
    componentDidMount() {
        console.log('<ProductoCarro> se ha montado');
        //this.state.elementoInput.current.focus();
        //this.elementoInput.current.focus();
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
            // <div className={clases.ProductoCarro}>
            <Ponclase clases={clases.ProductoCarro}>
                <li>  x{this.props.cantidad}</li>
                <img src={this.props.foto} alt="foto_producto" width="100" height="100"/>
                <li> {this.props.nombre}  ({this.props.precio}€) </li>
                <p>{this.props.children}</p>
            </Ponclase>
        )
    }
}

ProductoCarro.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    cambiando: PropTypes.func,
    borrando: PropTypes.func,
    quitando: PropTypes.func,
    añadiendo: PropTypes.func
}

export default ProductoCarro;

/*
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