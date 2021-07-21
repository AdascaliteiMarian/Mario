import { Rect, Circle } from "react-konva";

export function Player(props) {
    return (
        <div>
        <Rect 
            x={props.x} 
            y={props.y} 
            width={10} 
            height={10} 
            fill="red" 
        />
        <Rect 
            x={props.x + 10} 
            y={props.y + 10} 
            width={10} 
            height={10} 
            fill="red" 
        />
        <Rect 
            x={props.x - 10} 
            y={props.y + 10} 
            width={10} 
            height={10} 
            fill="red" 
        />
        <Rect 
            x={props.x} 
            y={props.y - 10} 
            width={10} 
            height={10} 
            fill="red" 
        />
        <Rect 
            x={props.x - 10} 
            y={props.y - 30} 
            width={30} 
            height={20} 
            fill="red" 
        />
        
        </div>
    );
}


