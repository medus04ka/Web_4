import React, { useEffect, useState } from "react";
import CSSModules from "react-css-modules";
import styles from "./IndexContent.style.css";
import AuthSection from "./authsection/AuthSection";

const IndexContent = (props) => {
    const [currentTime, setCurrentTime] = useState("");

    return (
        <main className="main-container">
            <h1 className="visually-hidden">Мейник</h1>
            <AuthSection />
        </main>
    );
};

export default CSSModules(IndexContent, styles, { allowMultiple: true, handleNotFoundStyleName: "ignore" });
