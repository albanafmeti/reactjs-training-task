import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {

    static propTypes = {
        fetchProducts: PropTypes.func.isRequired
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

    render() {
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
                            <button className="btn btn-outline-secondary" type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchForm;