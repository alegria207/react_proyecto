import React from 'react';
import CharComponent from './CharComponent/CharComponent';

class CharComponents extends React.Component {
    componentDidMount(){
        console.log('<CharComponents> se ha montado');
    }
    componentWillUnmount(){
        console.log('<CharComponents> se va a desmontar');
    }
    render() {
        return (
            <React.Fragment>
                {this.props.chars.split("").map((char, id) => {
                    return  <CharComponent char_content={char} 
                                            removing={() => this.props.remove(id)}/> 
                })}

            </React.Fragment>
        )
    }
}

export default CharComponents;
