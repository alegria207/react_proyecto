import React from 'react';
import clases from './App.module.css';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Output from '../components/Output/Output';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        { factor: 37, on_use: false },
        { factor: 43, on_use: false }
      ]}

  }

  componentDidMount() {
    console.log('<App> se ha montado');
  }
  componentWillUnmount() {
    console.log('<App> se va a desmontar');
  }

  updateInputValue = (event) => {
    this.setState({
      input_value: event.target.value
    })
  } 

  multiplyAndChangeButtonStatus = (id_clicked, not_id_clicked) => {
    this.multiply(id_clicked)
    this.changeButtonStatus(id_clicked, not_id_clicked)
  }
    
  multiply = (id) => {   
    this.setState({
      output_value: this.state.input_value*this.state.buttons[id].factor
    })
  }

  changeButtonStatus = (id_clicked, not_id_clicked) => {
    let buttns = [...this.state.buttons];
    buttns[id_clicked].on_use = true;
    buttns[not_id_clicked].on_use = false;
    this.setState({ buttons: buttns });
  }


  render() {

    return (
      <div className={clases.App}>
        <Header title={this.props.app_title}/>
        <Input input_value={this.updateInputValue}/>
        <Button factor={this.state.buttons[0].factor} 
                on_use={this.state.buttons[0].on_use} 
                click={() => this.multiplyAndChangeButtonStatus(0, 1)}/>
        <Button factor={this.state.buttons[1].factor} 
                on_use={this.state.buttons[1].on_use} 
                click={() => this.multiplyAndChangeButtonStatus(1, 0)}/>
        <Output dataSource={this.state.output_value} />
      </div>
    )
  }

}

export default App;
