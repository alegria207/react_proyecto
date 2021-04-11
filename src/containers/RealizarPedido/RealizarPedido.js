import React from 'react';
import clases from './RealizarPedido.module.css';
import Productos from '../../components/Productos/Productos';
import Showhide from '../../components/Showhide/Showhide';
import axios from 'axios';
import {Link} from 'react-router-dom';


class RealizarPedido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      mostrar: true,
      autenticado: false,
      otroValor: 'Hola',
      error: false,
      total_pedido: 0,
      carrito: [],
    }
  }

  componentDidMount() {
    console.log('<RealizarPedido> se ha montado');
    axios.get('https://dsm-ainhoa-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
    //axios.get('https://my-demoblog.firebaseio.com/personas.json')
      .then(response => {
        let productos = [];
        for (let key in response.data) {
          productos.push({
            foto: response.data[key].foto,
            nombre: response.data[key].nombre,
            precio: response.data[key].precio,
            idb: key, 
            cantidad: 0
          });
        }

        this.setState({ productos: productos });
      }).catch(error => {
        this.setState({ error: true });
      });
      this.props.actualizarCarro(this.state.carrito)
      this.props.actualizarTotal(this.state.total_pedido)
  }
  componentWillUnmount() {
    console.log('<RealizarPedido> se va a desmontar');
  }


  borraproducto = (id, idb) => {
    axios.delete('https://dsm-ainhoa-default-rtdb.europe-west1.firebasedatabase.app/productos/' + idb + '.json')
    //axios.delete('https://my-demoblog.firebaseio.com/personas/' + idb + '.json')
      .then(response => {
        console.log(response);
      });
    let products = [...this.state.productos];
    products.splice(id, 1);
    this.setState({ productos: products });
  }

  quitarCantidadProducto = (id, idb) => {

    let products = [...this.state.productos];
    if (products[id].cantidad>0){
      products[id].cantidad-=1;
    }
    this.setState({ productos: products });
    this.calcularTotalPedido();
    this.calcularCarrito();
  }

  añadirCantidadProducto = (id, idb) => {

    let products = [...this.state.productos];
    products[id].cantidad+=1;
    //products[id].nombre = 'Borrado';
    this.setState({ productos: products });
    this.calcularTotalPedido();
    this.calcularCarrito();
  }

  calcularCarrito = () => {
    let carro = [];
    for(let i in this.state.productos){
      if (this.state.productos[i].cantidad > 0){
        carro.push(this.state.productos[i])
      }
    }
    this.setState({ carrito: carro });
    this.props.actualizarCarro(carro)

  }

  calcularTotalPedido = () => {
    let total = 0;
    {this.state.productos.map((producto, id) => {
      total += producto.cantidad*producto.precio
      })}
    total = Number((total).toFixed(2))
    this.setState({ total_pedido: total })
    this.props.actualizarTotal(total)
  }


  render() {


    let listaproductos = null;
    if (this.state.mostrar) {

      listaproductos = (
        <Productos
          productos={this.state.productos}
          escribir={this.cambiaNombre}
          borrar={this.borraproducto}
          quitar={this.quitarCantidadProducto}
          añadir={this.añadirCantidadProducto} />

      )
    }

    const enlace = '/confirmacionpedido';
    console.log(this.state.carrito)

    return (
      <div className={clases.RealizarPedido}>
        <div className={clases.Total}>
          <b className={clases.TotalContenido}> Total pedido: {this.state.total_pedido}€ </b>
          <Link to={enlace}><button>Realizar pedido </button></Link>
        </div>

        {listaproductos}


      </div>
    )
  }

}

export default RealizarPedido;


