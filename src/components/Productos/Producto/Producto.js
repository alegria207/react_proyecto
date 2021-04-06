import React from 'react';
import clases from './Producto.module.css';
import Ponclase from '../../../hoc/Ponclase';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class Producto extends React.Component {
    constructor(props) {
        super(props);
        this.elementoInput = React.createRef();
        //this.state = { elementoInput: React.createRef() };
    }
    componentDidMount() {
        console.log('<Producto> se ha montado');
        //this.state.elementoInput.current.focus();
        //this.elementoInput.current.focus();
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
    }
}

Producto.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    cambiando: PropTypes.func,
    borrando: PropTypes.func
}

export default Producto;