import React from 'react';
import Layout from "./hoc/Layout/Layout";
import { Route} from "react-router-dom";
import AddFormFormik from "./container/AddForm/AddFromFromik";
import Page404 from './component/UI/404page/page404'

const app = () => {
    return (
        <Layout>
            <Route path='/add' component={AddFormFormik}/>
            <Route path='/new' render={() => (<div>hello</div>)}/>
            <Route component={Page404}/>
        </Layout>
    );
};

export default app;
