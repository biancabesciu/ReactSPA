import React, { Component } from "react";
import RestaurantDetailsContainer from "./../Rendering Comp/RestaurantDetailsContainer";

class FullRestaurants extends Component {
    render() {
        {this.detailsYelp(this.props.match.params.businessId)}
        return (
            <div>
                <RestaurantDetailsContainer />
            </div>
        );
    }
}

export default FullRestaurants;