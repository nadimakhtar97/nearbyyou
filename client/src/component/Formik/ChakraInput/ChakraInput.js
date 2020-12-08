import React from 'react';
import {Form, Field} from 'formik';
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Box

} from "@chakra-ui/react";


const ChakraInput = (props) => {

    const {label,name,...rest} = props;

    return (
        <Field name={name}>
            {
                ({form,field}) => {
                    return <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                        <Box m={3}>
                            <FormLabel  htmlFor={name}>{label}</FormLabel>
                            <Input id={name} {...rest} {...field}/>
                            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                        </Box>

                    </FormControl>
                }
            }
        </Field>
    );
};

export default ChakraInput;
