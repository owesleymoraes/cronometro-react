import React, { Component } from 'react';
import './style.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tempo: 0,
      botao: "Go"
    }

    this.time = null;
    this.start = this.start.bind(this);
    this.clean = this.clean.bind(this);
  }

  start() {
    if (this.time !== null) {

      clearInterval(this.time);
      this.time = null;
      let state = this.state
      state.botao = "Go";
      this.setState(state);

    } else {
      this.time = setInterval(() => {
        let state = this.state;
        state.tempo += 0.1;
        state.botao = "Stop"
        this.setState(state)
      }, 100)
    }

  }

  clean() {

    if (this.time !== null) {
      let state = this.state
      state.tempo = 0;
      state.botao = "Go"
      this.setState(state)

      clearInterval(this.time);
      this.time = null;

    } else {

      let state = this.state
      state.tempo = 0;
      this.setState(state)

    }

  }

  render() {
    return (
      <div className='container'>
        <img src={require('./assert/cronometro.png')} className='img' />
        <a className='timer'> {this.state.tempo.toFixed(1)} </a>

        <div className='areaBtn'>
          <a className='botao' onClick={this.start} >{this.state.botao}</a> <br />
          <a className='botao' onClick={this.clean}> Clean </a>
        </div>
      </div>



    )
  }
}

export default App;