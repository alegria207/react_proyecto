import React from 'react';

class ValidationComponent extends React.Component {
    componentDidMount(){
        console.log('<ValidationComponent> se ha montado');
    }
    componentWillUnmount(){
        console.log('<ValidationComponent> se va a desmontar');
    }
    render() {
        
        var txt;
        if (this.props.length < 5) {
            txt = 'Texto demasiado corto';
        }
        if (this.props.length >= 5) {
            txt = 'Texto suficientemente largo';
        }

        return (
            <div>
                <p> {txt} </p>
            </div>
        )
    }
}

export default ValidationComponent;