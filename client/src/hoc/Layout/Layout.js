import React , {Component} from 'react';
import Aux from '../Aux/aux';
import Toolbar from '../../component/Toolbar/Toolbar'
import AddForm from "../../container/AddForm/AddForm";
import AddFormFormik from '../../container/AddForm/AddFromFromik';
import classes from './Layout.module.css';



class Layout extends Component {
    render()
    {
        return (
            <Aux>
                <Toolbar/>
                {/*<AddFormFormik/>*/}
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
