import React from 'react';
import * as Yup from 'yup';
import {Formik, Form} from "formik";
import FormikControl from "../../Formik/FormikControl/FormikControl";
import {Button, Heading, Box, Container, useToast} from '@chakra-ui/react';
import axios from '../../../axios-backend';


const LoginForm = () => {

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Required !"),
        password: Yup.string().required('Required !')
    })

    const onSubmit = (values) => {
        axios.post('/login', values).then(res => console.log('login successful in frontend'));
    }

    const toast = useToast();
    const onClickHandler = () => toast({
        title: "Logged IN",
        description: "You are successfully logged in now!",
        position:"top",
        status: "success",
        duration: 9000,
        isClosable: true,
    });


    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {
                formik => {

                    return (
                        <Container bg='' borderRadius='md'>
                            <Form>
                                <Box m={3}>
                                    <Heading as='h2' size='md'>LOGIN</Heading>

                                </Box>
                                <FormikControl control='chakraInput' type='email' name='email' label='Email'/>
                                <FormikControl control='chakraInput' type='password' name='password' label='Password'/>
                                <Box m={3}>
                                    <Button type='submit' onClick={onClickHandler}
                                            disabled={!formik.isValid}>Login</Button>
                                </Box>
                            </Form>
                        </Container>
                    )

                }
            }
        </Formik>
    );
};

export default LoginForm;
