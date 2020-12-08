import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'
import classes from '../Formik.module.css'

function RadioButtons (props) {
    const { label, name, options, ...rest } = props
    return (
        <div className={classes.formControl}>
            <label className={classes.label}>{label}</label>
            <Field name={name} >
                {({ field }) => {
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                    type='radio'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value === option.value}
                                    className={classes.input}
                                />
                                <label htmlFor={option.value} className={classes.label}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }}
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </div>
    )
}

export default RadioButtons
