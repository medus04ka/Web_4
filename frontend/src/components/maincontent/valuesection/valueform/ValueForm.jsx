import React, { useEffect, useState } from "react";
import CSSModules from "react-css-modules";
import styles from "./ValueForm.style.css";
import ControlButton from "../../../common/controlbutton/ControlButton";
import InfoMessage from "./infomessage/InfoMessage";
import CheckBoxGroup from "./checkboxgroup/CheckBoxGroup";
import TextField from "./textfield/TextField";

const CHECK = 'check';
const CLEAR = 'clear';

const validateForm = values => {
    let isNumeric = num => {
        return !isNaN(parseFloat(num)) && isFinite(num);
    };

    if (!isNumeric(values.rCurrent) || !values.rValues.includes(parseFloat(values.rCurrent))) {
        return 'Choose a valid R!';
    }

/*
    if (!isNumeric(values.xCurrent) || !values.xValues.includes(parseFloat(values.xCurrent))) {
        return 'Choose a valid X!';
    }

 */

    if (!isNumeric(values.xCurrent) || values.xCurrent < values.xMin || values.xCurrent > values.xMax) {
        return `Choose X from ${values.xMin} to ${values.xMax}!`;
    }

    if (!isNumeric(values.yCurrent) || values.yCurrent < values.yMin || values.yCurrent > values.yMax) {
        return `Choose Y from ${values.yMin} to ${values.yMax}!`;
    }

    if (values.rCurrent <=0) {
        return 'Eblanchek? R greater than nol!!';
    }

    return '';
};

const ValuesForm = (props) => {
    const [infoMessage, setInfoMessage] = useState("Choose coordinates");
    const [action, setAction] = useState(undefined);

    const handleCheckClick = () => {
        setAction(CHECK);
    };

    const handleClearClick = () => {
        setAction(CLEAR);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        switch (action) {
            case CHECK: {
                const message = validateForm(props);
                if (message === "") {
                    props.checkEntry();
                } else {
                    setInfoMessage(message);
                }
                break;
            }
            case CLEAR:
                props.clearEntries();
                setInfoMessage("Choose pls coordinates");
                break;
            default:
                alert("Something wrong in Action in ValuesForm");
        }
    };

    useEffect(() => {
        const message = validateForm(props);
        setInfoMessage(message === "" ? "Choose pls coordinates" : message);
    }, [props]);

    return (
        <form className="values-form" onSubmit={(e) => handleSubmit(e)}>
            <InfoMessage message={infoMessage} />

            <div className="values-form-container">
                <label className="values-form-label theme">
                    <span className="values-form-label-text">R</span>
                </label>
                <div className="values-checkbox-container">
                    <CheckBoxGroup
                        groupValues={props.rValues}
                        valueCurrent={props.rCurrent}
                        selectValue={props.enterR}
                    />
                </div>
            </div>

            <div className="values-form-container">
                <label className="values-form-label theme">
                    <span className="values-form-label-text">X</span>
                </label>
                <div className="values-checkbox-container">
                    <CheckBoxGroup
                        groupValues={props.xValues}
                        valueCurrent={props.xCurrent}
                        selectValue={props.enterX}
                    />
                </div>
            </div>

            <div className="values-form-container">
                <label className="values-form-label theme" htmlFor="y-text">
                    <span className="values-form-label-text">Y</span>
                </label>
                <div className="values-form-control">
                    <TextField
                        value={props.yCurrent}
                        changeValue={props.enterY}
                        maxLength="7"
                        placeholder="From -3 to 3"
                    />
                </div>
            </div>

            <div className="values-form-control-container">
                <ControlButton text="Check" action={handleCheckClick} />
                <ControlButton text="Clear" action={handleClearClick} />
            </div>
        </form>
    );
};

export default CSSModules(ValuesForm, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });