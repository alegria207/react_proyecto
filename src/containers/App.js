import React from 'react';
import clases from './App.module.css';
import Header from '../components/Header/Header';
import ValidationComponent from '../components/ValidationComponent/ValidationComponent';
import CharComponents from '../components/CharComponents/CharComponents';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_string: '',
    }
  }

  componentDidMount() {
    console.log('<App> se ha montado');
  }
  componentWillUnmount() {
    console.log('<App> se va a desmontar');
  }


  updateInputValue = (event) => {
    this.setState({
      input_string: event.target.value,
    })
  } 

  calculateLenght = (string) => {
    return string.length
  } 

  removeChar = (id) => {
    let str = this.state.input_string;
    str = this.state.input_string.slice(0, id) + this.state.input_string.slice(id+1);
    this.setState({ input_string: str });
  }


  render() {

    return (
      <div className={clases.App}>
        <Header title={this.props.app_title}/>
        <input onChange={this.updateInputValue} value={this.state.input_string}/>
        <p> Longitud: {this.calculateLenght(this.state.input_string)}</p>
        <ValidationComponent length={this.calculateLenght(this.state.input_string)}/>
        <CharComponents
          chars={this.state.input_string}
          remove={this.removeChar}/>
      </div>
    )
  }

}

export default App;