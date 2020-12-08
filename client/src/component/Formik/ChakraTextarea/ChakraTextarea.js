import React from 'react';
import {Field} from "formik";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Textarea, Box
} from "@chakra-ui/react"

const ChakraTextarea = (props) => {

    const {label,name,...rest} = props

    return (
        <Field name={name}>
            {
                ({form,field}) => {
                    return <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                        <Box m={3}>
                            <FormLabel  htmlFor={name}>{label}</FormLabel>
                            <Textarea {...field} {...rest}/>
                            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                        </Box>
                    </FormControl>
                }
            }
        </Field>
    );
};

export default ChakraTextarea;
