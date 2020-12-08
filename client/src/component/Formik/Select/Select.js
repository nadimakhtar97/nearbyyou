import React from 'react';
import {ErrorMessage, Field} from "formik";
import TextError from "../TextError";
import classes from "../Formik.module.css";

const Select = (props) => {
    const {label,name,options,...rest} = props;
    return (
        <div className={classes.formControl}>
            <label htmlFor={name} className={classes.label}>{label}</label>
            <Field as='select' id={name} name={name} {...rest}>
                {
                    options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    ))
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};

export default Select;
