import React from 'react';
import Layout from "./hoc/Layout/Layout";
import { Route,Switch,Redirect} from "react-router-dom";
import AddFormFormik from "./container/AddForm/AddFromFromik";
import AddForm from './component/Forms/AddForm/AddForm'
import Stores from './component/Stores/Stores';
import EditStore from './container/EditStore/EditStore'
import StoreDetails from "./component/StoreDetails/StoreDetails";
import LoginForm from './component/Forms/LoginForm/LoginForm';
import ForgotForm from './component/Forms/ForgotForm/ForgotForm';
import RegisterForm from './component/Forms/RegisterForm/RegisterForm';
import Tags from './component/Tags/Tags';
import FormikContainer from "./component/Formik/FormikContainer/FormikContainer";
import ResetPasswordForm from "./component/Forms/ResetPasswordForm/ResetPasswordForm";
import MapWrapped from "./component/Map/MapWrapped";


const app = (props) => {
    return (
        <Layout>

            <Switch>
                <Route path='/add' render={AddForm}/>
                <Route path="/stores/:storeId/edit" exact at component={EditStore}/>
                <Route path='/store/:slug' component={StoreDetails}/>
                <Route path='/forgot/reset/:token' component={ResetPasswordForm}/>
                <Route path='/map' component={MapWrapped}/>
                <Route path='/formik' component={FormikContainer}/>
                <Route path='/forgot' component={ForgotForm}/>
                <Route path='/login' component={LoginForm}/>
                <Route path='/register' component={RegisterForm}/>
                <Route path='/tags' component={Tags}/>
                <Route path='/stores' component={Stores}/>
                <Route path='/' exact component={Stores}/>

            </Switch>

        </Layout>
    );
};

export default app;
