import React from "react";
import CSSModules from "react-css-modules";
import styles from './ErrorMessage.style.css';

const ErrorMessage = (props) => {
    return (
        props.message &&
        <p className="error-message">
            {props.message}
        </p>
    );
}
export default CSSModules(ErrorMessage, styles, {allowMultiple: true, handleNotFoundStyleName:'ignore'});