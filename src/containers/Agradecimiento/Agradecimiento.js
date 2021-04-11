import React from 'react';
import clases from './Agradecimiento.module.css';
import {Link} from 'react-router-dom';

class Agradecimiento extends React.Component {
    render() {
        const enlace = '/';
        return (
            <>
                <div className={clases.Agradecimiento}>
                    <p> <b>Su pedido se ha realizado con éxito</b> </p>
                    <p> <b>Muchas gracias por su compra</b> </p>
                    <p><Link to={enlace}><button> Realizar un nuevo pedido </button></Link> </p> 
                </div>

            </>
        )
    }
}

export default Agradecimiento;