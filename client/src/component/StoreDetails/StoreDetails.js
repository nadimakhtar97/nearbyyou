import React, {Component} from 'react';
import axios from '../../axios-backend';
import {Link} from 'react-router-dom';
import Aux from '../../hoc/Aux/aux'

class StoreDetails extends Component {

    state = {
        name : '',
        description:'',
        location:{
            address:'',
            coordinates:[]
        },
        tags:[]

    }

    componentDidMount() {
        axios.get(this.props.match.url).then(res=>{
            this.setState({
                name:res.data.name,
                description:res.data.description,
                location:res.data.location,
                tags:res.data.tags
            })
            console.log(this.state);
        })
    }

    render() {

        let tags = null;

        if(this.state.tags)
        {
           tags = (<ul className={tags}>
                {this.state.tags.map(tag => (
                    <li key={tag} className="tag"><a href={"/Tags/"+tag} className="tag__link">
                        <span className="tag__text">#{tag}</span>
                    </a></li>
                ))}
            </ul>)

        }


        return (
            <Aux>
                <div className="single">
                    <div className="single__hero">
                        <img src="../../assets/photos/1.jpg" alt="" className="single__image"/>
                        <h2 className="title title--single"><Link to={this.props.match.url}>{this.state.name}</Link></h2>
                    </div>
                </div>
                <div className="single__map">
                    <img src="../../assets/photos/2.jpg" alt="" className="single__map"/>
                    <p className="single__location">{this.state.location.address}</p>
                    <p>{this.state.description}</p>
                    {tags}
                </div>


            </Aux>

        );
    }
}

export default StoreDetails;
