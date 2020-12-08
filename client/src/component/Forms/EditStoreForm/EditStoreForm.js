import React from 'react';
import * as Yup from 'yup'
import FormikControl from '../../Formik/FormikControl/FormikControl';
import {Formik, Form} from 'formik';
import {Button, Heading, Container, Box} from "@chakra-ui/react";
import Autocomplete2 from "../../../container/Autocomplete/Autocomplete2";
import axios from '../../../axios-backend';



const EditStoreForm = (props) => {

    const initialValues = {
        name: '',
        description: '',
        tags: [],
        location: {
            address: "",
            coordinates: ['', '']
        }
    }

    const checkboxOptions = [
        {key: "Family Friendly", value: "familyFriendly"},
        {key: "Veg", value: "Veg"},
        {key: "Non-Veg", value: "nonVeg"},
        {key: "Open Late", value: "openLate"},
    ];


    const validationSchema = Yup.object({
        name: Yup.string().required('Required !'),
        description: Yup.string(),
        tags: Yup.array().required("Required !"),
    })



    const onSubmit = values => {
        console.log(values);
        const storeData = {
            name: values.name,
            description: values.description,
            tags: [...values.tags],
            location: {
                address: values.location.address,
                coordinates: [...values.location.coordinates]
            }
        }

        axios.post(`/add/${props.match.params.storeId || ''}`, storeData).then((res) => {
            console.log("post res successful");

        })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {
                formik => {
                    return (
                        <Container>
                            <Form>
                                <Box m={3}>
                                    <Heading as='h2' size='md'>EDIT STORE</Heading>
                                </Box>
                                <FormikControl control='chakraInput' type='text' name='name' label='Name'/>
                                <FormikControl control='chakraTextarea' type='textarea' name='description'
                                               label='Description'/>


                                <Autocomplete2/>
                                <FormikControl control='chakraInput' type='text' name='location.address' label='Address'/>
                                <FormikControl control='chakraInput' type='text' name='location.coordinates[0]' label='Latitude'/>
                                <FormikControl control='chakraInput' type='text' name='location.coordinates[1]' label='Longitude'/>
                                <Box spacing={5}>
                                    <FormikControl
                                        control='checkbox'
                                        label='Tags'
                                        name='tags'
                                        options={checkboxOptions}
                                    />
                                </Box>
                                <Box m={3}>
                                    <Button type='submit' disabled={!formik.isValid}>ADD STORE</Button>
                                </Box>
                            </Form>
                        </Container>
                    )

                }
            }
        </Formik>
    );
};

export default EditStoreForm;
