import React from 'react';
import clases from './App.module.css';
import Header from '../components/Header/Header';
import RealizarPedido from '../containers/RealizarPedido/RealizarPedido';
import PedidosRealizados from './PedidosRealizados/PedidosRealizados';
import ProductoDetail from './ProductoDetail/ProductoDetail';
import CreateProducto from './CreateProducto/CreateProducto';
import EditProducto from './EditProducto/EditProducto';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    console.log('<App> se ha montado');
  }
  componentWillUnmount() {
    console.log('<App> se va a desmontar');
  }


  render() {

    return (
      <div className={clases.App}>
        <Header titulo="Tienda" />
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Realizar Pedido</Link>
                </li>
                <li>
                  <Link to="/pedidos_realizados">Pedidos realizados</Link>
                </li>
                <li>
                  <Link to="/productos">Productos</Link>
                </li>
                <li>
                  <Link to="/addproducto">Crear Producto</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/pedidos_realizados">
                <PedidosRealizados />
              </Route>
              <Route path="/productos/:id">
                <ProductoDetail />
              </Route>
              <Route path="/productos">
                <RealizarPedido titulo="Cualquier título" />
              </Route>
              <Route path="/addproducto">
                <CreateProducto />
              </Route>
              <Route path="/editproducto/:id">
                <EditProducto />
              </Route>
              <Route path="/">
                <RealizarPedido />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }

}

export default App;
