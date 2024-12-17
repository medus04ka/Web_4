import React from "react";
import CSSModules from "react-css-modules";
import styles from "./ValueSection.style.css";
import sharedStyles from "../MainContent.sharedstyle.css";
import ValueFormContainer from "./valueform/ValueFormContainer";

const ValueSection = () => {
    return (
        <section className="column-container-item section content-section">
            <h2 className="theme section-header">
                <span className="section-header-text">
                    Параметрычи
                </span>
            </h2>
            <ValueFormContainer/>
        </section>
    );
}

export default CSSModules(ValueSection, {...styles, ...sharedStyles}, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore'
});
