import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import Results from "./../Prezentation Comp/Results";


//css
import "../Assets/searchBar.css";

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            'term':'',
            'location':'',
            'sortBy':'rating',
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    //state changes
    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    handleLocationChange(event) {
        this.setState({location: event.target.value});
    }

    handleSearch(event) {
        this.props.history.push(`search/results/${this.state.term}/${this.state.location}`);
        //TODO - go to URL search/results/:term/:location to load results
        event.preventDefault();
    }

    handleKeyPress(event) {
        if(event.keyCode === 13) {
            this.searchYelp(this.state.term, this.state.location, this.state.sortBy);
            console.log('hello');
        }
    }

    render() {
        return (
            <div className="SearchBar container-fluid">
                <div className="row wrap-search">
                    <div className="SearchBar-fields">
                        <input id="search-business" onChange={this.handleTermChange} onKeyUp={this.handleKeyPress} placeholder="Search business" />
                        <input id="search-place" onChange={this.handleLocationChange} onKeyUp={this.handleKeyPress} placeholder="where?" />
                    </div>

                    <div className="SearchBar-submit">
                        <button type="button" className="btn btn-default search-btn" aria-label="Right Align" onClick={this.handleSearch}><span className="fa fa-search"></span></button>
                    </div>
                </div>

                <Switch>
                    <Route path='/search/results/:term/:location' component={Results}/>
                </Switch>
            </div>
        );
    }
}

export default SearchBar;
