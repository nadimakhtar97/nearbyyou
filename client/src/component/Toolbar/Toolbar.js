import React from 'react';
import Aux from '../../hoc/Aux/aux';
import Icon from '../Icon/Icon';
import classes from './Toolbar.module.css';
import {Link} from "react-router-dom";

const toolbar = () => {
    return (
        <Aux>
            <div className={classes.rainbow}/>
            <div className={classes.Toolbar}>
                <div className={classes.iconContainer}>

                    <Link to='/'><Icon iconType="logo" height="120%" title=""/></Link>
                    <Link to='/stores'><Icon iconType="shop" height="80%" title="STORES"/></Link>
                    <Link to='/'><Icon iconType="tag" height="80%" title="TAGS"/></Link>
                    <Link to='/'><Icon iconType="top" height="80%" title="TOP"/></Link>
                    <Link to='/add'><Icon iconType="add" height="80%" title="ADD"/></Link>
                    <Link to='/'><Icon iconType="map" height="80%" title="MAP"/></Link>
                </div>
                <div className={classes.Buttons}>
                    <Icon iconType="register" height="80%"/>
                    <Icon iconType="login" height="80%"/>
                </div>
            </div>


        </Aux>

    );
};

export default toolbar;
