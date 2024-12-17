import React from "react";
import CSSModules from "react-css-modules";
import styles from './ControlButton.style.css';

const IndexContent = (props) => {
    return (
        <button className="control-button theme" type="submit" onClick={props.action}>
            {props.text}
        </button>
    );
}

export default CSSModules(IndexContent, styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'});