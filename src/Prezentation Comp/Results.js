import React, { Component } from 'react';
import Yelp from './../Util/Yelp';

//components
import Restaurants from './Restaurants';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'businesses': []
        };

        this.searchYelp = this.searchYelp.bind(this);
        this.searchYelp(this.props.match.params.term, this.props.match.params.location, "rating");
    }
    searchYelp(term, location, sortBy) {
        Yelp.search(term,location,sortBy).then(businesses => {
            this.setState({businesses:businesses})
        });
    }
    render() {
        return (
            <div className="Results">
                {this.state.businesses.map(business => {
                    return <Restaurants key={business.id} business={business}/>;
                })}
            </div>
        );
    }
}

export default Results;