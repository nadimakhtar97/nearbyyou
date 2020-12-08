import React from 'react';
import * as Yup from 'yup'
import FormikControl from '../../Formik/FormikControl/FormikControl';
import {Formik, Form} from 'formik';
import {Button, Heading, Container} from "@chakra-ui/react";
import axios from '../../../axios-backend';

const ResetPasswordForm = (props) => {

    const initialValues = {
        password: '',
        confirmPassword: ''
    }

    const validationSchema = Yup.object({
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match!').required('Required !')
    })

    const onSubmit = values => {
        axios.post(props.match.url, values).then(res => console.log(" reset successful "))
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {
                formik => {
                    return (
                        <Container>
                            <Form>
                                <Heading as='h2' size='md'>RESET PASSWORD</Heading>
                                <FormikControl control='chakraInput' type='password' name='password' label='Password'/>
                                <FormikControl control='chakraInput' type='password' name='confirmPassword'
                                               label='Confirm Password'/>
                                <Button type='submit' disabled={!formik.isValid}>REGISTER</Button>
                            </Form>
                        </Container>
                    )

                }
            }
        </Formik>
    );
};

export default ResetPasswordForm;
