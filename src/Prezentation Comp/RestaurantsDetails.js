import React from 'react';

const RestaurantsDetails = RestaurantDetails => (
    <div className="container-fluid">
        <div className="card h-100">
            <h1 className="card-title">
                {RestaurantDetails.name}
            </h1>

            <img className="card-img-top image-container" src={RestaurantDetails.imageSrc} alt={RestaurantDetails.name} />

            <div className="card-body Restaurants-information">
                <div className="Restaurants-address">
                    <p>{RestaurantDetails.name}</p>
                </div>
            </div>
        </div>
    </div>
);

export default RestaurantsDetails;