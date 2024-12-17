import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Table.style.css";
import Entry from "./Entry";

const Table = (props) => {
    return (
        <div className="table-container">
            <table className="result-table">
                <thead>
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>Sosal?</th>
                </tr>
                </thead>
                <tbody>
                {props.entries.map((entry, index) => (
                    <Entry
                        key={entry.id || `${entry.x}-${entry.y}-${entry.r}-${index}`}
                        x={entry.x}
                        y={entry.y}
                        r={entry.r}
                        result={entry.result}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};



export default CSSModules(Table, styles, {allowMultiple:true, handleNotFoundStyleName:'ignore'});