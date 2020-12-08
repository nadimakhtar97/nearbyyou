import React from 'react';
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from 'yup';



const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const validationSchema = Yup.object({
    name : Yup.string().required('Required!'),
    email : Yup.string().email("Invalid email format").required("Required!"),
    channel : Yup.string().required('Required!')

})

const onSubmit = values => {
    console.log(values);
}


const LoginForm = () => {


    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <label htmlFor="name">name</label>
                <Field type='text' id='name' name='name' />
                <ErrorMessage name='name'/>

                <label htmlFor="email">email</label>
                <Field type='text' id='email' name='email' />
                <ErrorMessage name='email'/>

                <label htmlFor="channel">channel</label>
                <Field type='text' id='channel' name='channel' />
                <ErrorMessage name='channel'/>

                <button type='submit'>submit</button>
            </Form>
        </Formik>

    );
};

export default LoginForm;
