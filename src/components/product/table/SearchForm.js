import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {

    static propTypes = {
        fetchProducts: PropTypes.func.isRequired,
        isFiltered: PropTypes.bool.isRequired
    };

    state = {
        query: ""
    };

    onChange = (e) => {
        this.setState({
            query: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.fetchProducts(this.state.query);
    };

    clearSearch = () => {
        this.setState({
            query: ""
        });
        this.props.fetchProducts();
    };

    render() {

        let clearSearchBtn = "";
        if (this.props.isFiltered) {
            clearSearchBtn = <button className="btn btn-outline-danger"
                                     type="submit" title="Clear Search"
                                     onClick={this.clearSearch}><i className="fa fa-times"></i></button>;
        }

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-search"></i></span>
                        </div>

                        <input type="text" className="form-control" placeholder="Search by name"
                               value={this.state.query} onChange={this.onChange}/>

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