import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Text from "../../general/input/Text";

class SearchForm extends Component {

    static propTypes = {
        fetchProducts: PropTypes.func.isRequired,
        isFiltered: PropTypes.bool.isRequired
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.fetchProducts(this.searchInput.getValue());
    };

    clearSearch = () => {
        this.searchInput.setValue("");
        this.props.fetchProducts();
    };

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.isFiltered !== nextProps.isFiltered;
    }

    render() {

        let clearSearchBtn = "";
        if (this.props.isFiltered) {
            clearSearchBtn = <button className="btn btn-outline-danger" title="Clear Search"
                                     onClick={this.clearSearch}><i className="fa fa-times"></i></button>;
        }

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-search"></i></span>
                        </div>

                        <Text placeholder="Search by name" ref={(input) => this.searchInput = input}/>

                        <div className="input-group-append">

                            {clearSearchBtn}

                            <button className="btn btn-outline-secondary" type="submit">Search</button>

                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchForm;