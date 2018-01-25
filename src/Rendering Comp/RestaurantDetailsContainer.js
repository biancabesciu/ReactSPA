import React, {Component} from 'react';
import RestaurantsDetails from './../Prezentation Comp/RestaurantsDetails';
import Yelp from './../Util/Yelp';

class RestaurantDetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {RestaurantDetails: ''};
        this.detailsYelp = this.detailsYelp.bind(this);

    }

    detailsYelp(businessId) {
        Yelp.details(businessId).then(RestaurantDetails => {
            this.setState({RestaurantDetails:RestaurantDetails})
        });
    }

    render() {
        return (
            <div>
                <RestaurantsDetails restaurantDetails={this.state.RestaurantDetails}/>
            </div>
        )
    }
}

export default RestaurantDetailsContainer;