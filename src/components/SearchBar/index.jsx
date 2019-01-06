import React, { Component } from 'react';
import './styles.css';

class SearchBar extends Component {
    state = {
        value : ""
    }

    render() {
        return (
            <section id="search_bar" className="col-sm-8 col-xs-12">
                <div className="inner-addon">
                    <i className="glyphicon glyphicon-search search-icon"></i>
                    <input type="text" placeholder="Search" className="form-control" />
                </div>
            </section>
        );
    }
}

export default SearchBar;