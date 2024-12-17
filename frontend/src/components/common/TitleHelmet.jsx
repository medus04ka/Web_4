import React from "react";
import {Helmet} from "react-helmet";

const TitleHelmet = (props) => {
    return (
        <Helmet>
            <title>{props.title ? props.title : "pizdes"}</title>
        </Helmet>
    );
}
export default TitleHelmet;