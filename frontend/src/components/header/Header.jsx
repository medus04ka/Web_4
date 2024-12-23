import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Header.style.css";
import Logout from "./logout/Logout";

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
                <a href="https://wayou.github.io/t-rex-runner/">Пи(кми)пасивна</a>
            </ul>
        </header>
    );
}
export default CSSModules(Header, styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'});