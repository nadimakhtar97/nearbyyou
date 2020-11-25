import {Field, Form, Formik} from "formik";
import React from 'react';
import axios from "../../axios-backend";
import classes from './AddFormFormik.module.css';
import Aux from '../../hoc/Aux/aux';
import {withRouter} from "react-router-dom";

const addFormFormik = (store) => {

    const onsubmitHandler = (storeData) => {
        const store = {
            name: storeData.name,
            description: storeData.description,
            tags: [...storeData.tags]
        }

        console.log('this is onsubmit')
        console.log(store);

        axios.post('/add', store).then((res) => {
            console.log("post res successful");
            // console.log(res)
            // this.props.history.push('/');
        })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <Aux>
            <Formik initialValues={
                {
                    name: '',
                    description: '',
                    tags: []
                }

            } onSubmit={(storeData) => {
                onsubmitHandler(storeData)
            }}>
                {() => (
                    <Form className={classes.AddFormFormik}>
                        <h1>ADD STORE</h1>
                        <section>
                            <div>
                                <label htmlFor="name" className={classes.Label}>Name</label>
                                <Field required type='text' name='name' className={classes.InputElement}/>
                            </div>
                            <div>
                                <label htmlFor="description" className={classes.Label}>Description</label>
                                <Field type='textarea' name='description' className={classes.InputElement}/>
                            </div>

                            <div id="checkbox-group">TAGS</div>
                            <div role="group" aria-labelledby="checkbox-group">
                                <label>
                                    <Field type="checkbox" name="tags" value="Veg"/>
                                    Veg
                                </label>
                                <label>
                                    <Field type="checkbox" name="tags" value="Non-Veg"/>
                                    Non-Veg
                                </label>
                                <label>
                                    <Field type="checkbox" name="tags" value="Family"/>
                                    Family
                                </label>
                            </div>
                            <button type="submit" className={classes.Button}>SUBMIT</button>
                        </section>
                    </Form>
                )}
            </Formik>
        </Aux>

    )

};

export default withRouter(addFormFormik);
