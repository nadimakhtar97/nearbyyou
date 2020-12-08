import React from 'react';
import * as Yup from 'yup'
import FormikControl from '../../Formik/FormikControl/FormikControl';
import {Formik, Form} from 'formik';
import {Button, Heading, Container, Box, useToast} from "@chakra-ui/react";
import axios from '../../../axios-backend';

const RegisterFrom = () => {

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required !'),
        email: Yup.string().email('Invalid email format !').required('Required !'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match!').required('Required !')
    })

    const onSubmit = values => {
        axios.post('/register',values).then(res => console.log(" register successful "))
    }

    const toast = useToast();
    const onClickHandler = () => toast({
        title: "Account created.",
        description: "We've created your account for you.",
        position:'top',
        status: "success",
        duration: 9000,
        isClosable: true,
    });

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {
                formik => {
                    return (
                        <Container>
                            <Form>
                                <Box m={3}>
                                    <Heading as='h2' size='md'>REGISTER</Heading>
                                </Box>
                                <FormikControl control='chakraInput' type='text' name='name' label='Name'/>
                                <FormikControl control='chakraInput' type='email' name='email' label='Email'/>
                                <FormikControl control='chakraInput' type='password' name='password' label='Password'/>
                                <FormikControl control='chakraInput' type='password' name='confirmPassword'
                                               label='Confirm Password'/>
                                <Box m={3}>
                                    <Button type='submit' onClick={onClickHandler} disabled={!formik.isValid}>REGISTER</Button>
                                </Box>
                            </Form>
                        </Container>
                    )

                }
            }
        </Formik>
    );
};

export default RegisterFrom;
