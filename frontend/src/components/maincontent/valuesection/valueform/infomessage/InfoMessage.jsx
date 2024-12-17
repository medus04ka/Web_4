import React from "react";
import CSSModules from "react-css-modules";
import styles from "./InfoMessage.style.css";

const InfoMessage = (props) => {
    return (
        <p className="value-form-info">
            {props.message}
        </p>
    );
}
export default CSSModules(InfoMessage, styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'});