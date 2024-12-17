import React from "react";
import CSSModules from "react-css-modules";
import styles from './Canvas.style.css';

const Canvas = (props) => {
    return (
        <canvas ref={props.canvasRef} className="canvas" width="300" height="300"
                onClick={props.handleClick !== undefined ? (e) => props.handleClick(props.canvasRef,e): null}>
            {props.alt}
        </canvas>
    );
}

export default CSSModules(Canvas, styles, {allowMultiple: true, handleNotFoundStyleName:'ignore'});