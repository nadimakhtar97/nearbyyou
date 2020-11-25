import React, {Component} from 'react';
import Input from '../../component/UI/Input/Input';
import axios from '../../axios-backend';
import Spinner from '../../component/UI/Spinner/Spinner';
import Button from '../../component/UI/Button/Button';
import classes from './AddForm.module.css'

class AddForm extends Component {
    state = {
        addForm: {

            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            description: {
                elementType: 'input',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Description'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            tag1: {
                elementType: 'checkbox',
                elementConfig: {
                    type: 'checkbox',
                },
                value: 'veg',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            tag2: {
                elementType: 'checkbox',
                elementConfig: {
                    type: 'checkbox',
                },
                value: 'non-veg',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
            ,
            tag3: {
                elementType: 'checkbox',
                elementConfig: {
                    type: 'checkbox',
                },
                value: 'all time',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            tag4: {
                elementType: 'checkbox',
                elementConfig: {
                    type: 'checkbox',
                },
                value: 'night',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }

        },
        formIsValid: false,
        loading: false,


    }

    addStoreHandler = () => {
        this.setState({loading: true});
        const formData = {};
        for (let formElementIdentifier in this.state.addForm) {
            formData[formElementIdentifier] = this.state.addForm[formElementIdentifier].value;
        }
        // console.log(formData);
        const store = {
            storeData: formData
        }

        axios.post('/add',store).then((res) => {

            // console.log('This is response in react'+res);
            this.setState({loading: false});
            this.props.history.push('/');
        })
            .catch((err) => {
                this.setState({loading: false})
            });
    }


    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.minLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {

        const updatedAddForm = {...this.state.addForm};

        const updatedElement = {
            ...updatedAddForm[inputIdentifier]
        };
        updatedElement.value = event.target.value;
        updatedElement.valid = this.checkValidity(updatedElement.value, updatedElement.validation);
        updatedElement.toched = true;
        updatedAddForm[inputIdentifier] = updatedElement;
        let formIsValid = true;
        for (let inputIdentifier in updatedAddForm)
            formIsValid = updatedAddForm[inputIdentifier].valid && formIsValid;

        this.setState({addForm: updatedAddForm, formIsValid: formIsValid});
        // console.log(this.state)


    }

    render() {

        let formElements = [];

        for(let key in this.state.addForm )
        {
            formElements.push({
                id:key,
                config:this.state.addForm[key]
            })
        }

        let form = (
            <form onSubmit={this.addStoreHandler}>
                {
                    formElements.map(formElement => (
                        <Input
                            key={formElement.id}
                            elemenType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event)=>{this.inputChangedHandler(event,formElement.id)}}
                            invalid={!formElement.valid}
                            shouldValidate={!formElement.formIsValid}
                            touched={formElement.config.touched}
                            label={formElement.id}
                        />

                    ))
                }
                <Button btnType='Danger'>CANCEL</Button>
                <Button btnType='Success' clicked={this.addStoreHandler} >SAVE</Button>
            </form>
        )

        if(this.state.loading)
            form = <Spinner/>

        return (
            <div className={classes.AddFrom}>
                <h1>ADD STORE</h1>
                {form}
            </div>
        );
    }
}

export default AddForm;
