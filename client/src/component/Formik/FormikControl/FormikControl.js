import React from 'react';
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Select from "../Select/Select";
import RadioButtons from "../RadioButtons/RadioButtons";
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import DatePicker from '../DatePicker/DatePicker';
import ChakraInput from '../ChakraInput/ChakraInput';
import ChakraTextarea from '../ChakraTextarea/ChakraTextarea';
import ChakraCheckbox from '../ChakraCheckbox/ChakraCheckbox';


const FormikControl = (props) => {

    const {control, ...rest} = props;

    switch (control) {
        case 'input' :
            return <Input {...rest}/>
        case 'textarea' :
            return <Textarea {...rest}/>
        case 'select' :
            return <Select {...rest}/>
        case 'radio' :
            return <RadioButtons {...rest}/>
        case 'checkbox' :
            return <CheckboxGroup {...rest}/>
        case 'date' :
            return <DatePicker {...rest}/>
        case 'chakraInput' :
            return <ChakraInput {...rest}/>
        case 'chakraTextarea' :
            return <ChakraTextarea {...rest}/>
        case 'chakraCheckbox' :
            return <ChakraCheckbox {...rest}/>
        case 'default' :
            return null


    }
};

export default FormikControl;
