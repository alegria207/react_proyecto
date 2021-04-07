import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class CreateProducto extends React.Component {
    state = {
        nombre: '',
        precio: '',
        foto: '',
        grabado: false
    }

    grabaProducto = () => {
        const data = {
            nombre: this.state.nombre,
            precio: parseFloat(this.state.precio),
            foto:  this.state.foto
        };
        axios.post('https://dsm-ainhoa-default-rtdb.europe-west1.firebasedatabase.app/productos.json', data)
        //axios.post('https://my-demoblog.firebaseio.com/personas.json', data)
            .then(response => {
                alert('Producto grabado');
                this.setState({grabado:true});
            });
    }

    render() {
        let redireccion = null;
        if(this.state.grabado){
            redireccion = (<div><Redirect to="/productos" /></div>);
        }
        return (
            <>
                <h1>Añadir Producto</h1>
                <div>
                    <label>Nombre: </label>
                    <input type="text"
                        value={this.state.nombre}
                        onChange={(event) => this.setState({ nombre: event.target.value })} />
                </div>
                <div>
                    <label>Precio: </label>
                    <input type="text"
                        value={this.state.precio}
                        onChange={(event) => this.setState({ precio: event.target.value })} />
                </div>
                <div>
                    <label>Foto: </label>
                    <input type="textarea"
                        value={this.state.foto}
                        onChange={(event) => this.setState({ foto: event.target.value })} />
                </div>
                <button onClick={this.grabaProducto}>Crear Producto</button>
                {redireccion}
            </>
        )
    }
}

export default CreateProducto;