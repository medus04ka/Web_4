import React from "react";
import CSSModules from "react-css-modules";
import styles from "./CheckBox.style.css";

const CheckBox = (props) => {
    const isChecked = Array.isArray(props.valueCurrent) && props.valueCurrent.includes(props.value);

    return (
        <label className="checkbox-container">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => props.selectValue(props.value)}
            />
            <span className="checkbox-item-label">{props.value}</span>
        </label>
    );
};

export default CSSModules(CheckBox, styles, { allowMultiple: true, handleNotFoundStyleName: "ignore" });