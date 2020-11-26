import React , {Component} from 'react';
import Aux from '../Aux/aux';
import Toolbar from '../../component/Toolbar/Toolbar'
import EditForm from '../../container/EditStore/EditStore'
import classes from './Layout.module.css';



class Layout extends Component {
    render()
    {
        return (
            <Aux>
                <Toolbar/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
