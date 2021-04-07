import React from 'react';
import FichaProducto from '../../components/FichaProducto/FichaProducto';
import {
    withRouter
} from "react-router-dom";
import axios from 'axios';

class ProductoDetail extends React.Component {
    state = {
        producto: {}
    }
    componentDidMount() {
        console.log('<ProductoDetail> se ha montado');
        const id = this.props.match.params.id;
        axios.get('https://dsm-ainhoa-default-rtdb.europe-west1.firebasedatabase.app/productos.json?orderBy="$key"&equalTo="' + id + '"')
        //axios.get('https://my-demoblog.firebaseio.com/personas.json?orderBy="$key"&equalTo="' + id + '"')
            .then(response => {
                const producto = [];
                for (let key in response.data) {
                    producto.push({
                        ...response.data[key],
                        idb: key
                    });
                }
                this.setState({producto: producto[0]});
            });
    }
    render() {
        const id = this.props.match.params.id;
        return ( //ver detalles
            <>
                <h1>Ficha productol</h1> 
                <FichaProducto datos={this.state.producto} />
            </>
        )
    }
}

export default withRouter(ProductoDetail);