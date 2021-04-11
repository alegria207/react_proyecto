import React from 'react';

class Boton extends React.Component {
    componentDidMount(){
        console.log('<Boton> se ha montado');
    }
    componentWillUnmount(){
        console.log('<Boton> se va a desmontar');
    }
    render() {
        return (
            <button onClick={this.props.click}>{this.props.contenido} </button>


   
        )
    }
}

export default Boton;

