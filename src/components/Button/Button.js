import React from 'react';
import clases from './Button.module.css';

class Button extends React.Component {
    componentDidMount(){
        console.log('<Button> se ha montado');
    }
    componentWillUnmount(){
        console.log('<Button> se va a desmontar');
    }
    render() {
        const styles = [];
        if (this.props.on_use == true) {
            styles.push(clases.active);
        }
        if (this.props.on_use == false) {
            styles.push(clases.Button);
        }
        return (
            <button className={styles.join(' ')} onClick={this.props.click}>
                x {this.props.factor}
            </button>
        )
    }
}

export default Button;