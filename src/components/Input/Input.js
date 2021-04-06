import React from 'react';
import clases from './Input.module.css';

class Input extends React.Component {
    componentDidMount(){
        console.log('<Input> se ha montado');
    }
    componentWillUnmount(){
        console.log('<Input> se va a desmontar');
    }
    render() {
        return (
            <div className={clases.Input}>
                <input type="text" onChange={this.props.input_value} />
            </div>
        )
    }
}

export default Input;