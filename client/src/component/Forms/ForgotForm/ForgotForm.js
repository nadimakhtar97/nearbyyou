import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik, Form} from "formik";
import FormikControl from "../../Formik/FormikControl/FormikControl";
import {Button, Heading, Box, Container, useToast} from '@chakra-ui/react';
import axios from '../../../axios-backend';
import 'react-toastify/dist/ReactToastify.css';

const ForgotForm = () => {

    const initialValues = {
        email: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Required !"),
    })

    const [flash, setFlash] = useState({flash: false})

    const onSubmit = (values) => {
        axios.post('/forgot', values).then(res => {
            console.log('forgot password !!!')
            console.log(res);
            if (res)
                setFlash({flash: true});
        });
    }

    const toast = useToast();
    const onClickHandler = () => toast({
        title: "Forgot Password",
        description: "Mail sent to you with the reset link!",
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
                                    <Heading as='h2' size='md'>I FORGOT MY PASSWORD !</Heading>
                                </Box>
                                <FormikControl control='chakraInput' type='email' name='email' label='Email'/>
                                <Box m={3}>
                                    <Button onClick={onClickHandler} type='submit' disabled={!formik.isValid}>SEND A
                                        RESET</Button>
                                </Box>

                            </Form>
                        </Container>
                    )

                }
            }
        </Formik>
    );
};

export default ForgotForm;
