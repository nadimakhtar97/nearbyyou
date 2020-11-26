import React,{Component} from 'react';
import AddFromFormik from "../AddForm/AddFromFromik";
import axios from '../../axios-backend';


/* see Node 14*/

class editStore extends Component {

    state = {
        name : "",
        description : " ",
        tags : []
    }

    componentDidMount() {
        axios.get("/stores/5fbd475e2faaa8bf34b58ab4/edit").then(res => {
            console.log(res);
        })
    }

    render()
    {
        return (
            <AddFromFormik title={"Edit Store"}/>
        );
    }
}

export default editStore;
