import React, {Component} from 'react';
import axios from '../../axios-backend';

class Tags extends Component {

    state = {
        tags : [{tag:'',count: null}]
    }


    componentDidMount() {
        axios.get('/tags').then(res => {
            const tags = res ;
            console.log(tags);
        })

    }

    render() {

        // let tags =

        return (
            <div>
                <div className="inner">
                    <h2>Tags</h2>
                    <ul className="tags">
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tags;
