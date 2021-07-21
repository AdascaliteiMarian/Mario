import { Rect } from "react-konva";

export function Board(props) {
    return (
        <Rect
            x={0}
            y={0}
            width={props.width}
            height={props.height}
            strokeWidth={4} // border width
            stroke="red" // border color
        />
    );
}
