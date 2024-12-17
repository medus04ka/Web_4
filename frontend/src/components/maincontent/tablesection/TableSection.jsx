import CSSModules from "react-css-modules";
import styles from "./TableSection.style.css";
import sharedStyle from "../MainContent.sharedstyle.css";
import Table from "./Table/Table";

const TableSection = (props) => {
    return (
        <section className="main-container-item main-container-item-table section content-section">
            <h2 className="theme section-header">
                <span className="section-header-text">
                    Табло
                </span>
            </h2>
            <Table entries={props.entries}/>
        </section>
    );
}

export default CSSModules(TableSection, {...styles, ...sharedStyle}, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore'
});