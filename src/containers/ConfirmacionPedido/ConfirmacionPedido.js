import React from 'react';
import ProductosCarro from '../../components/ProductosCarro/ProductosCarro';
import Formulario from '../../components/Formulario/Formulario';
import Boton from '../../components/Boton/Boton'

class ConfirmacionPedido extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total_pedido:this.props.total,
            carrito: this.props.carrito_total,
            mostrar_formulario: false,
        }
    }

    mostrarFormulario= () => {
        this.setState({ mostrar_formulario: true })
      }
    
    render() {
        let listaproductoscarro = null;

        listaproductoscarro = (
            <ProductosCarro
              productosCarro={this.state.carrito} />
          )

        let formulario = null;
        if (this.state.mostrar_formulario) {
            formulario = <Formulario carrito_contenido={this.state.carrito}/>
        }

        let botoncontinuar = null;
        if (this.state.total_pedido>0 && !this.state.mostrar_formulario){
            botoncontinuar = <Boton contenido="Continuar" click={() => this.mostrarFormulario() }/>
        }

        return (
            <>
                <p>{botoncontinuar}</p>
                {formulario}
                <b>Detalles del pedido: </b>
                {listaproductoscarro}
                <p><b> Total: {this.state.total_pedido}€ </b> </p>
            </>
        )
    }
}

export default ConfirmacionPedido;