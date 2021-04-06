import React from 'react';
import clases from './Output.module.css';

class Output extends React.Component {
    componentDidMount(){
        console.log('<Output> se ha montado');
    }
    componentWillUnmount(){
        console.log('<Output> se va a desmontar');
    }
    render() {
        return (
            <div className={clases.Output}>
                <p>Output: {this.props.dataSource} </p>
            </div>
        )
    }
}

export default Output;