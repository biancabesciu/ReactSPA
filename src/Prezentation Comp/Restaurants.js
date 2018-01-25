import React from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';

//css
import '../Assets/restaurants.css';
import RestaurantsDetailsContainer from './../Rendering Comp/RestaurantDetailsContainer';

const Restaurants = (props) => (
    <div className="container Restaurants">
        <div className="row">
            <div className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                    <NavLink to={`/search/restaurants/${props.business.id}`}><img className="card-img-top image-container" src={props.business.imageSrc} alt={props.business.name} /></NavLink>
                    <h2 className="card-title">
                        <NavLink to={`/search/restaurants/${props.business.id}`}>{props.business.name}</NavLink>
                    </h2>

                    <div className="card-body Restaurants-information">
                        <div className="Restaurants-address">
                            <p>{props.business.address}</p>
                            <p>{props.business.city}</p>
                            <p>{props.business.state}</p>
                            <p>{props.business.zipCode}</p>
                        </div>

                        <div className="Restaurants-reviews">
                            <h3 className="rating">{props.business.rating} stars</h3>
                            <p>{props.business.reviewCount} reviews</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <Switch>
            <Route path='/search/restaurants/:businessId' component={RestaurantsDetailsContainer}/>
        </Switch>
    </div>
);

export default Restaurants;