import React from "react";
import CSSModules from "react-css-modules";
import styles from "./TextField.style.css";

const TextField = (props) => {
    return (
        <input
            className="text-field"
            id="y-text"
            value={props.value || ""}
            onChange={(e) => props.changeValue(e.target.value)}
            maxLength={props.maxLength}
            placeholder={props.placeholder}
        />
    );
};
export default CSSModules(TextField, styles, { allowMultiple: true, handleNotFoundStyleName: "ignore" });