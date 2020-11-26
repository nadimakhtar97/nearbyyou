import React from 'react';
import classes from './Store.module.css';
import {Link,withRouter} from "react-router-dom";

const store = (props) => {
    return (
        <div className={classes.Store}>
            <Link to={ "/stores/"+props.id+"/edit" }>Edit</Link>
            <h1>{props.storeName}</h1>
            <h3>{props.storeDescription}</h3>
            {props.storeTags.map(tag => (
                <h4 key={tag}>{tag}</h4>
            ))}
        </div>
    );
};

export default withRouter(store);
