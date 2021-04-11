import React from 'react';
import clases from './App.module.css';
import Header from '../components/Header/Header';
import RealizarPedido from '../containers/RealizarPedido/RealizarPedido';
import PedidosRealizados from './PedidosRealizados/PedidosRealizados';
import PedidoDetail from './PedidoDetail/PedidoDetail';
import ConfirmacionPedido from './ConfirmacionPedido/ConfirmacionPedido';
import Agradecimiento from './Agradecimiento/Agradecimiento';

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    console.log('<App> se ha montado');
  }
  componentWillUnmount() {
    console.log('<App> se va a desmontar');
  }

  constructor(props) {
    super(props);
    this.state = {
      total_pedido: 0,
      carrito:[],
    }
  }

  actualizarTotalPedido = (actual_total) => {
    this.setState({ total_pedido: actual_total });
  }
  
  actualizarCarrito = (actual_carrito) => {
    this.setState({ carrito: actual_carrito });
  }

  render() {
    return (
      <div className={clases.App}>
        <Header titulo="Tienda de escalada" />
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Realizar pedido</Link>
                </li>
                <li>
                  <Link to="/pedidos_realizados">Pedidos realizados</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/pedidos_realizados/:id">
                <PedidoDetail />
              </Route>
              <Route path="/pedidos_realizados">
                <PedidosRealizados />
              </Route>
              <Route path="/confirmacionpedido">
                <ConfirmacionPedido  total={this.state.total_pedido} carrito_total={this.state.carrito}/>
              </Route>
              <Route path="/agradecimiento">
                <Agradecimiento/>
              </Route>
              <Route path="/">
                <RealizarPedido actualizarTotal={this.actualizarTotalPedido} actualizarCarro={this.actualizarCarrito}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }

}

export default App;
