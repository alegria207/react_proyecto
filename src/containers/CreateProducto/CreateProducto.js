import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class CreateProducto extends React.Component {
    state = {
        nombre: '',
        edad: '',
        poblacion: '',
        imagen: '',
        grabado: false
    }

    grabaProducto = () => {
        const data = {
            nombre: this.state.nombre,
            edad: parseInt(this.state.edad),
            poblacion: this.state.poblacion,
            imagen:  this.state.imagen
        };
        axios.post('https://my-demoblog.firebaseio.com/personas.json', data)
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
                    <label>Edad: </label>
                    <input type="text"
                        value={this.state.edad}
                        onChange={(event) => this.setState({ edad: event.target.value })} />
                </div>
                <div>
                    <label>Población: </label>
                    <input type="text"
                        value={this.state.poblacion}
                        onChange={(event) => this.setState({ poblacion: event.target.value })} />
                </div>
                <div>
                    <label>Imagen: </label>
                    <input type="textarea"
                        value={this.state.imagen}
                        onChange={(event) => this.setState({ imagen: event.target.value })} />
                </div>
                <button onClick={this.grabaProducto}>Crear Producto</button>
                {redireccion}
            </>
        )
    }
}

export default CreateProducto;