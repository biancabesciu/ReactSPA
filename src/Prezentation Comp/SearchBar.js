import React from 'react';

const SearchBar = () => (
    <div className="SearchBar container-fluid">
        <div className="row wrap-search">
            <div className="SearchBar-fields">
                <input id="search-business" onChange={this.props.handleTermChange} onKeyUp={this.props.handleKeyPress} placeholder="Search business" />
                <input id="search-place" onChange={this.props.handleLocationChange} onKeyUp={this.props.handleKeyPress} placeholder="where?" />
            </div>

            <div className="SearchBar-submit">
                <button type="button" className="btn btn-default search-btn" aria-label="Right Align" onClick={this.props.handleSearch}><span className="fa fa-search"></span></button>
            </div>
        </div>
    </div>
);

export default SearchBar;