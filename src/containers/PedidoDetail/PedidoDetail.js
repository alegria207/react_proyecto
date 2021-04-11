import React from 'react';
import FichaPedido from '../../components/FichaPedido/FichaPedido';
import {
    withRouter
} from "react-router-dom";
import axios from 'axios';

class PedidoDetail extends React.Component {
    state = {
        pedido: {}
    }
    componentDidMount() {
        console.log('<PedidoDetail> se ha montado');
        const id = this.props.match.params.id;
        axios.get('https://dsm-ainhoa-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json?orderBy="$key"&equalTo="' + id + '"')
        //axios.get('https://my-demoblog.firebaseio.com/personas.json?orderBy="$key"&equalTo="' + id + '"')
            .then(response => {
                const pedido = [];
                for (let key in response.data) {
                    pedido.push({
                        ...response.data[key],
                        idb: key
                    });
                }
                this.setState({pedido: pedido[0]});
            });
    }
    render() {
        const id = this.props.match.params.id;
        return ( //ver detalles
            <>
                <b>Ficha pedido id {this.state.pedido.idb}</b> 
                <FichaPedido datos={this.state.pedido} />
            </>
        )
    }
}

export default withRouter(PedidoDetail);