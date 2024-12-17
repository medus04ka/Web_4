import React from "react";
import CSSModules from "react-css-modules";
import styles from "./PreLoader.style.css";
import preloader from "../../icons/preloader.svg";

const PreLoader = (props) => {
    return (
        <div className="preloader-container">
            <img src={preloader} alt="Loading..."/>
        </div>
    );
};

export default CSSModules(PreLoader, styles, {
    allowMultiple: true,
    handleNotFoundStyleName: "ignore",
});