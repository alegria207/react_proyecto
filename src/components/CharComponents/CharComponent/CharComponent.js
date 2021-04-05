import React from 'react';
import clases from './CharComponent.module.css';


class CharComponent extends React.Component {

    
    componentDidMount() {
        console.log('<CharComponent> se ha montado');
    }
    componentWillUnmount() {
        console.log('<CharComponent> se va a desmontar');
    }
    render() {
        return (
            <div className={clases.CharComponent} onClick={this.props.removing}>
                <p >{this.props.char_content}</p>
            </div>
        )
    }
}


export default CharComponent;