import React from 'react';
import clases from './PedidosRealizados.module.css';
import Pedidos from '../../components/Pedidos/Pedidos';
import axios from 'axios';


class PedidosRealizados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pedidos: [],
    }
  }

  componentDidMount() {
    console.log('<PedidosRealizados> se ha montado');
    axios.get('https://dsm-ainhoa-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json')
    //axios.get('https://my-demoblog.firebaseio.com/personas.json')
      .then(response => {
        let pedidos = [];
        for (let key in response.data) {
            pedidos.push({
            nombre: response.data[key].nombre,
            apellido1: response.data[key].apellido1,
            apellido2: response.data[key].apellido2,
            telefono: response.data[key].telefono,
            mail: response.data[key].mail,
            direccion: response.data[key].direccion,
            carrito: response.data[key].carrito,
            idb: key, 
          });
        }

        this.setState({ pedidos: pedidos });
      }).catch(error => {
        this.setState({ error: true });
      });
     
  }
  componentWillUnmount() {
    console.log('<PedidosRealizados> se va a desmontar');
  }


  borrapedido = (id, idb) => {
    axios.delete('https://dsm-ainhoa-default-rtdb.europe-west1.firebasedatabase.app/pedidos/' + idb + '.json')
    //axios.delete('https://my-demoblog.firebaseio.com/personas/' + idb + '.json')
      .then(response => {
        console.log(response);
      });
    let pedids = [...this.state.pedidos];
    pedids.splice(id, 1);
    this.setState({ pedidos: pedids });
  }


  render() {


    let listapedidos = null;

    listapedidos = (
        <Pedidos
          pedidos={this.state.pedidos}
          borrar={this.borrapedido}/>

      )

    return (
      <div className={clases.PedidosRealizados}>
        {listapedidos}
      </div>
    )
  }

}

export default PedidosRealizados;