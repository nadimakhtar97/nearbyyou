import React from 'react';
import {Formik, Form} from "formik";
import * as Yup from 'yup';
import FormikControl from "../FormikControl/FormikControl";

const FormikContainer = () => {

    const dropdownOptions = [
        {key: "Select an option", value: ""},
        {key: "Option 1", value: "Option 1"},
        {key: "Option 2", value: "Option 2"},
        {key: "Option 3", value: "Option 3"},
        {key: "Option 4", value: "Option 4"},
    ];

    const radioOptions = [
        {key: "Option 1", value: "rOption 1"},
        {key: "Option 2", value: "rOption 2"},
        {key: "Option 3", value: "rOption 3"}
    ];

    const checkboxOptions = [
        {key: "Option 1", value: "cOption 1"},
        {key: "Option 2", value: "cOption 2"},
        {key: "Option 3", value: "cOption 3"}
    ];

    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birthDate: null


    };
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Required !"),
        description: Yup.string().required("Required !"),
        selectOption: Yup.string().required("Required !"),
        radioOption: Yup.string().required("Required !"),
        checkboxOption: Yup.array().required("Required !"),
        birthDate: Yup.date().required('Required !').nullable()
    });
    const onSubmit = (values) => {
        console.log(values);
    }


    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {
                Formik => (
                    <Form>
                        <FormikControl control='input' type='email' label='Email' name='email'/>

                        <FormikControl control='textarea' label='Description' name='description'/>

                        <FormikControl
                            control='select'
                            label='Select a topic'
                            name='selectOption'
                            options={dropdownOptions}
                        />

                        <FormikControl
                            control='radio'
                            label='Radio Topic'
                            name='radioOption'
                            options={radioOptions}
                        />

                        <FormikControl
                            control='checkbox'
                            label='Checkbox Topic'
                            name='checkboxOption'
                            options={checkboxOptions}
                        />

                        <FormikControl
                            control='date'
                            name='birthDate'
                            label='Pick a Date'
                        />


                        <button type='submit'>submit</button>

                    </Form>
                )
            }
        </Formik>
    );
};

export default FormikContainer;
