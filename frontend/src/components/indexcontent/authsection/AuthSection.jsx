import React from "react";
import CSSModules from "react-css-modules";
import styles from './AuthSection.style.css';
import AuthFormContainer from "./authform/AuthFormContainer";

const AuthSection = (props) => {
    return (
        <section className="section content-section">
            <h2 className="theme section-header">
                <span className="section-header-text">
                    Авторизируйся
                </span>
            </h2>
            <AuthFormContainer/>
        </section>
    );
}

export default CSSModules(AuthSection, styles, {allowMultiple: true, handleNotFoundStyleName:'ignore'});