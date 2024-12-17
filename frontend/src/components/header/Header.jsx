import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Header.style.css";
import Logout from "./logout/Logout";
import { SlArrowLeft } from "react-icons/sl";

const Header = (props) => {
    const handleLogout = (e) => {
        e.preventDefault();
        props.logout();
    }
    return (
        <header className="main-header theme">
            {props.loggedUser && <Logout action={handleLogout}/>}
            <ul className="main-header-content info">
                <div><a href="https://ooo.eeeee.ooo/"><span>Ми(к)ху</span></a></div>
            </ul>
            <ul className="main-header-content creator">
                <a href="https://wayou.github.io/t-rex-runner/">Пипасивна</a>
            </ul>
        </header>
    );
}
export default CSSModules(Header, styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'});