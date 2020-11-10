// import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const root = document.getElementById('root');

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }
  render(){
    return(
      <button 
        className='square' 
        onClick={() => this.setState({value: 'x'})}
      >
          {this.state.value}
      </button>
    )
  }
}

class Board extends React.Component {
  renderSquare(i){
    return <Square value={this.state.squares[i]} />
  }

  render(){
    const status = 'Next Player: x';

    return(
      <div>
          <div className='status'>{status}</div>
          <div className='board-row'>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className='board-row'>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className='board-row'>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  root
);
