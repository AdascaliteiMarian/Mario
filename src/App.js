import './App.css';
import { Layer, Stage } from 'react-konva';
import { Board } from './Components/Board.js'
import {Player} from './Components/Player'
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player_position: {
        x: 250,
        y: 250,
      },
      direction: "inplace",
      last_height: 0
    }
    this.move_player = this.move_player.bind(this);
    this.on_key_press = this.on_key_press.bind(this);
    window.addEventListener('keydown',this.on_key_press);
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.move_player(),
      100);
   }
   componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render(){
  return (
    <div >
     <Stage width={window.innerWidth} height={window.innerHeight}>
       <Layer>
        <Board  width = {1500} height = {1000}/>
        <Player 
              x={this.state.player_position.x}
              y={this.state.player_position.y}
            />
       </Layer>
     </Stage>
    </div>
  );
  }
  on_key_press(event){
    if(event.key == "ArrowUp"){
      this.setState(() => {
        return { direction: "up" };
      });
    }
    if(event.key == " "){
      this.setState(() => {
        return { direction: "inplace" };
      });
    }
    
    if(event.key == "ArrowDown"){
      this.setState(() => {
        return {direction: "down"};
      });
    }

    if(event.key == "ArrowLeft"){
      this.setState(() => {
        return {direction: "left"};
      });
    }

    if(event.key == "ArrowRight"){
      this.setState(() => {
        return {direction: "right"};
      });
    }


  }

move_player(){
  const current_height = this.state.player_position.y;
  const current_width = this.state.player_position.x;
  let last_height = this.state.last_height;
  const current_direction = this.state.direction;
  if(last_height == current_height + 20){
    this.setState(() => {
      return {
        player_position: {x: current_width, y: current_height + 20},
        direction: "inplace"
      };
    });
  }

  if(current_direction == "right"){
    this.setState(() => {
      return {
        player_position: {x: current_width + 10, y: current_height},
        direction: "inplace"
      };
    });
  }
  if(current_direction == "left"){
    this.setState(() => {
      return {
        player_position: {x: current_width - 10, y: current_height},
        direction: "inplace"
      };
    });
  }
  if(current_direction == "up"){
    this.setState(() => {
      return {
        last_height: current_height,
        player_position: {x: current_width, y: current_height - 20},
        direction: "inplace",
      };
    });
  }
  if(current_direction == "down"){
    this.setState(() => {
      return {
        player_position: {x: current_width, y: current_height + 10},
        direction: "inplace"
      };
    });
  }
}
}
export default App;
