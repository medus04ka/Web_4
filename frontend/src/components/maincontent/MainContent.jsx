import React from "react";
import CSSModules from "react-css-modules";
import styles from "./MainContent.style.css";
import sharedStyles from "./MainContent.sharedstyle.css";
import GraphSection from "./graphsection/GraphSection";
import ValueSection from "./valuesection/ValueSection";
import TableSectionContainer from "./tablesection/TableSectionContainer";

const MainContent = () => {
    return (
        <main className="main-container">
            <h1 className="visually-hidden">Web Project 4 - Main page</h1>
            <div className="main-container-item main-container-item-left-column colum-container">
                <GraphSection/>
                <ValueSection/>
            </div>
            <TableSectionContainer/>
        </main>
    );
}
export default CSSModules(MainContent, {...styles, ...sharedStyles}, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore'
});