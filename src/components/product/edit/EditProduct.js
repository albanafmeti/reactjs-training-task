import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import toastr from 'toastr';

import 'react-datepicker/dist/react-datepicker.css';

class EditProduct extends Component {

    state = {
        product: {
            name: "",
            price: "",
            description: "",
            creation_date: moment(new Date()),
        }
    };

    static propTypes = {
        product: PropTypes.object.isRequired,
        updateProduct: PropTypes.func.isRequired,
    };

    handleChange = (fieldName, event) => {
        const product = this.state.product;

        product[fieldName] = event.target.value;
        this.setState({product: product});
    };

    handleCreationDateChange = (date) => {
        const product = this.state.product;
        product.creation_date = date;
        this.setState({product: product});
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.isValidForm()) {
            this.props.updateProduct(this.props.product.id, this.state.product);

            this.props.history.push('/products');
            toastr.success("Product updated successfully.");
        }
    };

    isValidForm = () => {
        if (this.state.product.name === "") {
            toastr.error("Name is required.");
            return false;
        } else if (this.state.product.price === "") {
            toastr.error("Price is required.");
            return false;
        } else if (!this.state.product.creation_date) {
            toastr.error("Creation date is required.");
            return false;
        }

        return true;
    };

    componentWillMount() {
        const {product} = this.props;

        this.setState({
            product: product
        });
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Name</label>

                    <input type="text" className="form-control"
                           placeholder="Product Name"
                           value={this.state.product.name}
                           onChange={this.handleChange.bind(this, 'name')}/>

                </div>
                <div className="form-group">
                    <label>Price</label>
                    <div className="input-group">

                        <input type="number" className="form-control"
                               placeholder="Price"
                               value={this.state.product.price}
                               onChange={this.handleChange.bind(this, 'price')}/>

                        <div className="input-group-append">
                            <span className="input-group-text">$</span>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Description</label>

                    <textarea className="form-control"
                              placeholder="Product Description" rows="5"
                              value={this.state.product.description}
                              onChange={this.handleChange.bind(this, 'description')}></textarea>

                </div>
                <div className="form-group">
                    <label>Creation Date</label>

                    <DatePicker
                        dateFormat="YYYY/MM/DD"
                        className="form-control full-width"
                        selected={this.state.product.creation_date}
                        onChange={this.handleCreationDateChange}/>

                </div>

                <p className="text-right">
                    <button type="submit" className="btn btn-primary">
                        <i className="fa fa-save"></i>&nbsp;&nbsp;Save
                    </button>
                </p>
            </form>
        );
    }
}

export default withRouter(EditProduct);