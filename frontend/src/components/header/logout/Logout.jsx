import React from "react";
import CSSModules from 'react-css-modules';
import styles from './Logout.style.css';
import {SlArrowLeft} from "react-icons/sl";

const Logout = (props) => {
    return (
        <a className="logout-link" href="/" onClick={(e) => props.action(e)}>
            <SlArrowLeft />
        </a>
    );
}

export default CSSModules(Logout, styles, {allowMultiple: true, handleNotFoundStyleName:'ignore'});