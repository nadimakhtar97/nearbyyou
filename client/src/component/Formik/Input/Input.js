import React from 'react';
import {ErrorMessage, Field} from "formik";
import TextError from "../TextError";
import '../Formik.module.css'
import classes from "../Formik.module.css";

const Input = (props) => {

    const {label, name, ...rest} = props;

    return (
        <div className={classes.formControl}>
            <label htmlFor={name} className={classes.label}>{label}</label>
            <Field id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};

export default Input;
