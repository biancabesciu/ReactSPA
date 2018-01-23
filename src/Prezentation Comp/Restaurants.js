import React from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';

//css
import './../Assets/restaurants.css';
import FullRestaurants from './../Prezentation Comp/FullRestaurants';
import RestaurantsDetailsContainer from './../Rendering Comp/RestaurantDetailsContainer';

const Restaurants = () => (
    <div className="container Restaurants">
        <div className="row">
            <div className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                    <NavLink to={`/Restaurants/RestaurantsDetailsContainer${this.props.business.id}`}><img className="card-img-top image-container" src={this.props.business.imageSrc} alt={this.props.business.name} /></NavLink>
                    <h2 className="card-title">
                        <NavLink to={`/details/${this.props.business.id}`}>{this.props.business.name}</NavLink>
                    </h2>

                    <div className="card-body Restaurants-information">
                        <div className="Restaurants-address">
                            <p>{this.props.business.address}</p>
                            <p>{this.props.business.city}</p>
                            <p>{this.props.business.state}</p>
                            <p>{this.props.business.zipCode}</p>
                        </div>

                        <div className="Restaurants-reviews">
                            <h3 className="rating">{this.props.business.rating} stars</h3>
                            <p>{this.props.business.reviewCount} reviews</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <Switch>
            <Route exact path='/Restaurants' component={FullRestaurants}/>
            <Route path='/Restaurants/RestaurantsDetailsContainer/:businessId' component={RestaurantsDetailsContainer}/>
        </Switch>
    </div>
);

export default Restaurants;