import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import SearchBar from './../Rendering Comp/SearchBar';
import RestaurantDetailsContainer from "./RestaurantDetailsContainer";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {businesses: []};
    }


    render() {
        return (
            <div>
                <Switch>
                    <Route path='/search/restaurants/:businessId' component={RestaurantDetailsContainer}/>
                    <Route path='/' component={SearchBar}/>
                </Switch>
            </div>

        )
    }
}

export default Main;