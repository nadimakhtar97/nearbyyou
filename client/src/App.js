import React from 'react';
import Layout from "./hoc/Layout/Layout";
import { Route,Switch,Redirect} from "react-router-dom";
import AddFormFormik from "./container/AddForm/AddFromFromik";
import Stores from './component/Stores/Stores';
import Page404 from './component/UI/404page/page404';
import EditStore from './container/EditStore/EditStore'



const app = (props) => {
    return (
        <Layout>
            <Switch>
                <Route path='/add' render={()=>(<AddFormFormik title={'Add From'}/>)}/>
                <Route path="/stores/:storeId/edit" exact at component={EditStore}/>
                <Route path='/stores' component={Stores}/>
                {/*<Route path='/' component={Stores}/>*/}
                {/*<Redirect to={Page404}/>*/}
            </Switch>

        </Layout>
    );
};

export default app;
