import React from 'react';

const RestaurantsDetails = () => (
    <div className="container-fluid">
        <div className="card h-100">
            <h1 className="card-title">
                {this.state.RestaurantDetails.name}
            </h1>

            <img className="card-img-top image-container" src={this.state.RestaurantDetails.imageSrc} alt={this.state.RestaurantDetails.name} />

            <div className="card-body Restaurants-information">
                <div className="Restaurants-address">
                    <p>{this.state.RestaurantDetails.name}</p>
                </div>
            </div>
        </div>
    </div>
);

export default RestaurantsDetails;