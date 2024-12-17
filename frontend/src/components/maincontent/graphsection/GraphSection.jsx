import React from "react";
import CSSModules from "react-css-modules";
import styles from "./GraphSection.style.css";
import sharedStyles from "../MainContent.sharedstyle.css";
import GraphContainer from "./graph/GraphContainer";

const GraphSection = (props) => {
    return (
        <section className="column-container-item section content-section">
            <h2 className="theme section-header">
                <span className="section-header-text">
                    ЗЗЗшка
                </span>
            </h2>
            <GraphContainer/>
        </section>
    );
}
export default CSSModules(GraphSection, {...styles, ...sharedStyles}, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore'
});