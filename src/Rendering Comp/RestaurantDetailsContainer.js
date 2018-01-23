import React, {Component} from 'react';
import Restaurants from './../Prezentation Comp/RestaurantsDetails';
import Yelp from './../Util/Yelp';

class RestaurantDetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {restaurantDetails: ''};
        this.detailsYelp = this.detailsYelp.bind(this);

    }

    detailsYelp(businessId) {
        Yelp.details(businessId).then(restaurantDetails => {
            this.setState({restaurantDetails:restaurantDetails})
        });
    }

    render() {
        return <Restaurants />
    }
}

export default RestaurantDetailsContainer;