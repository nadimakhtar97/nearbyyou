import React,{Component} from 'react';
import Store from './Store/Store';
import axios from '../../axios-backend';

class stores extends Component {

    state = {
        stores : []
    }

    componentDidMount() {
        let storesData = null;
        axios.get('/stores').then((res)=>{
           storesData = [...res.data];
           this.setState({stores:storesData});
           console.log(this.state.stores);
        })
        console.log(this.props.match.path)
    }

    render() {

        const store = this.state.stores.map((store)=>(
            <Store key={store._id} storeName={store.name} id={store._id} storeDescription={store.description} storeTags={store.tags}/>
        ))

        return (
            <div>
                <h1>STORES</h1>
                {store}
            </div>
        );
    }
}

export default stores;
