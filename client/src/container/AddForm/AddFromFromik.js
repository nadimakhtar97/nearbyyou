import {Field, Form, Formik} from "formik";
import React from 'react';
import axios from "../../axios-backend";
import Autocomplete from "../Autocomplete/Autocomplete"
import classes from './AddFormFormik.module.css';
import Aux from '../../hoc/Aux/aux';
import {withRouter} from "react-router-dom";

const addFormFormik = (props) => {

    const onSubmitHandler = (storeData) => {

        console.log(storeData);
        // const store = {
        //     name: storeData.name,
        //     description: storeData.description,
        //     tags: [...storeData.tags],
        //     location: {
        //         address: storeData.location.address,
        //         coordinates: [...storeData.location.coordinates]
        //     }
        // }
        //
        // axios.post(`/add/${props.match.params.storeId || ''}`, store).then((res) => {
        //     console.log("post res successful");
        //
        // })
        //     .catch((err) => {
        //         console.log(err)
        //     });
    }

    return (
        <Aux>
            <div className={classes.AddFormFormik}>
                <h1>{props.title}</h1>
                <Formik initialValues={
                    {
                        name: '',
                        description: '',
                        tags: [],
                        location:{
                            address:"",
                            coordinates:['','']
                        }
                    }

                } onSubmit={(storeData) => {
                    onSubmitHandler(storeData)
                }}>
                    {() => (
                        <Form>

                            <section>
                                <div>
                                    <label htmlFor="name" className={classes.Label}>Name</label>
                                    <Field required type='text' name='name' className={classes.InputElement}/>
                                </div>
                                <div>
                                    <label htmlFor="description" className={classes.Label}>Description</label>
                                    <Field type='textarea' name='description' className={classes.InputElement} />
                                </div>

                                {/*<Autocomplete/>*/}

                                <div>
                                    <label htmlFor="address" className={classes.Label}>Address</label>
                                    <Field type='text' name='location[address]' className={classes.InputElement} />
                                </div>


                                <div>
                                    <label htmlFor="latitude" className={classes.Label}>Latitude</label>
                                    <Field type='text' name='location[coordinates][0]' className={classes.InputElement} />
                                </div>

                                <div>
                                    <label htmlFor="latitude" className={classes.Label}>Latitude</label>
                                    <Field type='text' name='location[coordinates][1]' className={classes.InputElement} />
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
            </div>

        </Aux>

    )

};

export default withRouter(addFormFormik);
