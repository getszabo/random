import React from 'react';
import './Random.css';

/**
 *  A component for playing with a random integer
 */
class Random extends React.Component{
  state = {
    number: 0
  }
  
  componentDidMount() {
    this.getRandomNumber();
  }

  getRandomNumber = () => {
    fetch('http://localhost:5000/random')
    .then(res => res.json())
    .then((data) => {
      this.setState({ number: data["number"] })
    })
  }

  incrementNumber = () => {
    if(this.state.number < 100){
      this.setState({
        number: this.state.number + 1
      });
    }
  }

  decrementNumber = () => {
    if(this.state.number > 0){
      this.setState({
        number: this.state.number - 1
      });
    }
  }

  render() {
    return(
      <div class="main">
        <div class="number">{this.state.number}</div>
        <div class="buttons">
          <button onClick={this.incrementNumber}>+</button>
          <button onClick={this.decrementNumber}>-</button>
          <button onClick={this.getRandomNumber}>Reroll</button>
        </div>
       </div>
    );
  }
}

export default Random; 