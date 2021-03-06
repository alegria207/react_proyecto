import React from 'react';
import axios from 'axios';
import clases from './Formulario.module.css';
import {Redirect} from 'react-router-dom';

class Formulario extends React.Component {
    state = {
        nombre: '',
        apellido1: '',
        apellido2: '',
        telefono: '',
        mail: '',
        direccion: '',
        grabado: false
    }

    grabaPedido = () => {
        if (this.state.nombre!=''&&this.state.apellido1!=''&&this.state.apellido2!=''&&this.state.telefono!=''&&this.state.mail!=''&&this.state.direccion!=''){
            const data = {
                nombre: this.state.nombre,
                apellido1: this.state.apellido1,
                apellido2: this.state.apellido2,
                telefono: this.state.telefono,
                mail: this.state.mail,
                direccion: this.state.direccion,
                carrito: this.props.carrito_contenido,
            };
            axios.post('https://dsm-ainhoa-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json', data)
                .then(response => {
                    this.setState({grabado:true});
                });
        }else{
            alert('Por favor, rellene todos los campos del formulario para poder realizar el pedido');
        }

    }

    render() {

        let redireccion = null;
        if(this.state.grabado){
            redireccion = (<div><Redirect to="/agradecimiento" /></div>);
        }
        return (
            <>
            <div className={clases.Formulario}>
                <p><b>Rellene los siguientes datos para realizar su pedido: </b></p>
                <div>
                    <label>Nombre: </label>
                    <li>
                    <input type="text"
                        value={this.state.nombre}
                        onChange={(event) => this.setState({ nombre: event.target.value })} />
                    </li>
                </div>
                <div>
                    <label>Apellido1: </label>
                    <li>
                    <input type="text"
                        value={this.state.apellido1}
                        onChange={(event) => this.setState({ apellido1: event.target.value })} />
                    </li>
                </div>
                <div>
                    <label>Apellido2: </label>
                    <li>
                    <input type="text"
                        value={this.state.apellido2}
                        onChange={(event) => this.setState({ apellido2: event.target.value })} />
                    </li>
                </div>
                <div>
                    <label>Tel??fono: </label>
                    <li>
                    <input type="text"
                        value={this.state.telefono}
                        onChange={(event) => this.setState({ telefono: event.target.value })} />
                    </li>
                   
                </div>
                <div>
                    <label>Mail: </label>
                    <li>
                    <input type="text"
                        value={this.state.mail}
                        onChange={(event) => this.setState({ mail: event.target.value })} />
                    </li>
                </div>
                <div>
                    <label>Dirreci??n de env??o: </label>
                    <li>
                    <input type="text"
                        value={this.state.direccion}
                        onChange={(event) => this.setState({ direccion: event.target.value })} />
                    </li>
                   
                </div>
                <div>
                    <button onClick={this.grabaPedido}>Realizar pedido</button>
                </div>

            </div>

            
            {redireccion}

            </>
        )
    }
}

export default Formulario;