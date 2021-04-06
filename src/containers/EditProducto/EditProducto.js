import React from 'react';
import axios from 'axios';
import {
    withRouter
} from "react-router-dom";
import {Redirect} from 'react-router-dom';

class EditPerson extends React.Component {
    state = {
        nombre: '',
        edad: '',
        poblacion: '',
        imagen: '',
        id: '',
        actualizado: false
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get('https://my-demoblog.firebaseio.com/personas.json?orderBy="$key"&equalTo="' + id + '"')
            .then(response => {
                const producto = [];
                for (let key in response.data) {
                    this.setState({
                        nombre: response.data[key].nombre,
                        edad: response.data[key].edad,
                        poblacion: response.data[key].poblacion,
                        imagen: response.data[key].imagen,
                        id: id
                    })
                    // producto.push({
                    //     ...response.data[key],
                    //     idb: key
                    // });
                }
            });
    }

    actualizaProducto = () => {
        const data = {
            nombre: this.state.nombre,
            edad: parseInt(this.state.edad),
            poblacion: this.state.poblacion,
            imagen: this.state.imagen
        };
        axios.put('https://my-demoblog.firebaseio.com/personas/' + this.state.id + '.json', data)
            .then(response => {
                alert('Producto actualizado');
                this.setState({actualizado:true});
            });
    }

    render() {
        let redireccion = null;
        if(this.state.actualizado){
            redireccion =(<div><Redirect to="/productos" /></div>)
        }
        return (
            <>
                <h1>Editar Producto</h1>
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
                    <input type="text"
                        value={this.state.imagen}
                        onChange={(event) => this.setState({ imagen: event.target.value })} />
                </div>
                <button onClick={this.actualizaProducto}>Actualizar Producto</button>
            </>
        )
    }
}

export default withRouter(EditPerson);