import React, {Component} from 'react';
import SearchBar from './../Prezentation Comp/SearchBar';

class SearchBarContainer extends Component {
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
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    handleKeyPress(event) {
        if(event.keyCode === 13) {
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
            console.log('hello');
        }
    }

    render () {
        return <SearchBar />
    }
}

export default SearchBarContainer;