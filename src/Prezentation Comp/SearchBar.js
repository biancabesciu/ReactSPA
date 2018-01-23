import React from 'react';

//css
import './../Assets/searchBar.css'

const SearchBar = () => (
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
    </div>
);

export default SearchBar;