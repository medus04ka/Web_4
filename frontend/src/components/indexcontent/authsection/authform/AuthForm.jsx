import React from "react";
import {useFormik} from "formik";
import styles from "./AuthForm.style.css";
import CSSModules from "react-css-modules";
import ErrorMessage from "./errormessage/ErrorMessage";
import ControlButton from "../../../common/controlbutton/ControlButton";

const validate = values => {
    const errors = {};

    if (!values.username && !values.password) {
        errors.errorMessage = 'Please enter your login !';
    } else if (!values.username) {
        errors.errorMessage = 'Username cannot be empty!';
    } else if (!values.password) {
        errors.errorMessage = 'Password cannot be empty!'
    }
    return errors;
};

const AuthForm = (props) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            newAccount: false
        },
        validate,
        onSubmit: values => {
            if (values.newAccount) {
                props.register(values.username, values.password);
            } else {
                props.login(values.username, values.password);
            }
        },
        validateOnChange: false,
        validateOnBlur: false
    });
    return (
        <div className="form-container">
            <ErrorMessage message={formik.errors.errorMessage
                ? formik.errors.errorMessage
                : props.serverErrMess
                    ? props.serverErrMess : ""}/>
            <form onSubmit={formik.handleSubmit}>
                <p className="text-field">
                    <label className="text-field-label" htmlFor="username">
                        Никнаме
                    </label>
                    <input id="username" type="next" name="username" value={formik.values.username}
                           onChange={formik.handleChange}/>
                </p>
                <br/>

                <p className="text-field">
                    <label className="text-field-label" htmlFor='password'>
                        Парольчик
                    </label>
                    <input id="password" type="password" name="password" value={formik.values.password}
                           onChange={formik.handleChange}/>
                </p>
                <br/>
                <ControlButton text="Login"/>
                <br/>

                <div className="register-field">
                    <input id="register-check" type="checkbox" name="newAccount" checked={formik.values.newAccount}
                           onChange={formik.handleChange}/>
                    <label className="register-label" htmlFor="register-check">
                        я еще не смешарик
                    </label>
                </div>
            </form>
        </div>
    );
}

export default CSSModules(AuthForm, styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'});