import React,{Component} from 'react';
import AddFromFormik from "../AddForm/AddFromFromik";
import axios from '../../axios-backend';
import EditStoreForm from '../../component/Forms/EditStoreForm/EditStoreForm'


/* see Node 14*/

class editStore extends Component {

    state = {
        name : "",
        description : " ",
        tags : []
    }

    componentDidMount() {
        axios.get(this.props.match.url).then(res => {
        })
    }

    render()
    {
        return (
            <EditStoreForm/>
        );
    }
}

export default editStore;
