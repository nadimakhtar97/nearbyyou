import React from 'react';
import {Field} from "formik";
import {
    FormControl,
    FormLabel,
    Checkbox,
    HStack,
    Textarea, Box
} from "@chakra-ui/react"
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";


const ChakraCheckbox = (props) => {

    const {label, name, options, ...rest} = props;




    return (
        <FormControl>
            <FormLabel htmlFor={name}>{label}</FormLabel>
                    <Field name={name}>
                        {
                            ({field}) => {
                                return options.map(option => {
                                    console.log(name)
                                    return (
                                        <React.Fragment key={option.value}>
                                            <Checkbox
                                                id={option.value}
                                                name={name}
                                                value={option.value}
                                                {...field}
                                                {...rest}
                                            >{option.key}</Checkbox>
                                        </React.Fragment>
                                    )
                                })
                            }
                        }
                    </Field>

            {/*<FormErrorMessage>{props.errors[name]}</FormErrorMessage>*/}
        </FormControl>
    );
};

export default ChakraCheckbox;
