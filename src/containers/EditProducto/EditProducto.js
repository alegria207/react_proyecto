import React from 'react';
import axios from 'axios';
import {
    withRouter
} from "react-router-dom";
import {Redirect} from 'react-router-dom';

class EditPerson extends React.Component {
    state = {
        nombre: '',
        precio: '',
        foto: '',
        id: '',
        actualizado: false
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get('https://dsm-ainhoa-default-rtdb.europe-west1.firebasedatabase.app/productos.json?orderBy="$key"&equalTo="' + id + '"')
        //axios.get('https://my-demoblog.firebaseio.com/personas.json?orderBy="$key"&equalTo="' + id + '"')
            .then(response => {
                const producto = [];
                for (let key in response.data) {
                    this.setState({
                        nombre: response.data[key].nombre,
                        precio: response.data[key].precio,
                        foto: response.data[key].foto,
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
            precio: parseFloat(this.state.precio),
            foto: this.state.foto
        };
        axios.put('https://dsm-ainhoa-default-rtdb.europe-west1.firebasedatabase.app/productos/' + this.state.id + '.json', data)
        //axios.put('https://my-demoblog.firebaseio.com/personas/' + this.state.id + '.json', data)
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
                    <label>Precio: </label>
                    <input type="text"
                        value={this.state.precio}
                        onChange={(event) => this.setState({ precio: event.target.value })} />
                </div>
                <div>
                    <label>Foto: </label>
                    <input type="text"
                        value={this.state.foto}
                        onChange={(event) => this.setState({ foto: event.target.value })} />
                </div>
                <button onClick={this.actualizaProducto}>Actualizar Producto</button>
            </>
        )
    }
}

export default withRouter(EditPerson);