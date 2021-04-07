import React from 'react';
import clases from './RealizarPedido.module.css';
import Productos from '../../components/Productos/Productos';
import Showhide from '../../components/Showhide/Showhide';
import axios from 'axios';

export const ContextoAutenticado = React.createContext({
  autenticado: false,
});

class RealizarPedido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      mostrar: true,
      autenticado: false,
      otroValor: 'Hola',
      error: false,
      total_pedido: 0
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
        // for (let key in response.data) {
        //   productos.push({
        //     ...response.data[key],
        //     idb: key
        //   });
        // }
        this.setState({ productos: productos });
      }).catch(error => {
        this.setState({ error: true });
      });
  }
  componentWillUnmount() {
    console.log('<RealizarPedido> se va a desmontar');
  }

  cambiaUnNombre = (nuevoNombre) => {
    //console.log('Entra');
    this.setState({
      productos: [
        { nombre: nuevoNombre, edad: '24' },
        { nombre: 'Luis', edad: '25' },
        { nombre: 'Juan', edad: '22' }
      ]
    })
  }

  cambiaNombre = (event, id) => {
    let products = [...this.state.productos];
    products[id].nombre = event.target.value;
    this.setState({ productos: products });
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
  }

  añadirCantidadProducto = (id, idb) => {

    let products = [...this.state.productos];
    products[id].cantidad+=1;
    //products[id].nombre = 'Borrado';
    this.setState({ productos: products });
  }
  
  mostrarOcultar = () => {
    let ver = this.state.mostrar;
    this.setState({ mostrar: !ver })
  }

  cambiaLogin = () => {
    const autenticado = this.state.autenticado;
    this.setState({ autenticado: !autenticado });
  }

  render() {


    let listaproductos = null;
    if (this.state.mostrar) {
      // listaproductos = (
      //   <div>
      //     <Product nombre={this.state.productos[0].nombre}
      //       edad={this.state.productos[0].edad}
      //       cambiando={(event) => this.cambiaNombre(event, 0)}
      //       borrando={() => this.borraproducto(0)} />
      //     <Product nombre={this.state.productos[1].nombre}
      //       edad={this.state.productos[1].edad}
      //       cambiando={(event) => this.cambiaNombre(event, 1)}
      //       borrando={() => this.borraproducto(1)} />
      //     <Product nombre={this.state.productos[2].nombre}
      //       edad={this.state.productos[2].edad}
      //       cambiando={(event) => this.cambiaNombre(event, 2)}
      //       borrando={() => this.borraproducto(2)}>Saludo desde aquí</Product>
      //   </div>)
      listaproductos = (
        <Productos
          productos={this.state.productos}
          escribir={this.cambiaNombre}
          borrar={this.borraproducto}
          quitar={this.quitarCantidadProducto}
          añadir={this.añadirCantidadProducto} />
        // <div>
        //   {this.state.productos.map((producto, id) => {
        //     return <Producto nombre={producto.nombre}
        //     key={id}
        //     edad={producto.edad}
        //     cambiando={(event) => this.cambiaNombre(event, id)}
        //     borrando={() => this.borraproducto(id)} />
        //   })}
        // </div>
      )
    }

    return (
      <div className={clases.RealizarPedido}>

        <p>Total pedido: {this.state.total_pedido} </p> 
        <ContextoAutenticado.Provider
          value={{
            autenticado: this.state.autenticado,
            otroValor: this.state.otroValor,
            cambiaLogin: this.cambiaLogin
          }}>
          {listaproductos}
        </ContextoAutenticado.Provider>

      </div>
    )
  }

}

export default RealizarPedido;

/*
    return (
      <div className={clases.RealizarPedido}>

        <Showhide mostrarocultar={this.mostrarOcultar} />
        <ContextoAutenticado.Provider
          value={{
            autenticado: this.state.autenticado,
            otroValor: this.state.otroValor,
            cambiaLogin: this.cambiaLogin
          }}>
          {listaproductos}
        </ContextoAutenticado.Provider>

      </div>
    )


*/
