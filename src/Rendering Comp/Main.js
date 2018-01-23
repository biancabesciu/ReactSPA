import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import SearchBarContainer from './SearchBarContainer';
import Yelp from './../Util/Yelp';
import Results from "../Prezentation Comp/Results";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {businesses: []};
        this.searchYelp = this.searchYelp.bind(this);
    }

    searchYelp(term, location, sortBy) {
        Yelp.search(term,location,sortBy).then(businesses => {
            this.setState({businesses:businesses})
        });
    }


    render() {
        return (
            <div>
                <SearchBarContainer searchYelp={this.searchYelp}/>
                <Results businesses={this.state.businesses}/>
            </div>

        )
    }
}

export default Main;