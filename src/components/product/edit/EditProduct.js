import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import toastr from 'toastr';

import 'react-datepicker/dist/react-datepicker.css';
import Datepicker from "../../general/input/Datepicker";
import Textarea from "../../general/input/Textarea";
import Number from "../../general/input/Number";
import Text from "../../general/input/Text";

class EditProduct extends Component {

    static propTypes = {
        product: PropTypes.object.isRequired,
        updateProduct: PropTypes.func.isRequired,
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.isValidForm()) {
            this.props.updateProduct(this.props.product.id, {
                name: this.nameInput.getValue(),
                price: this.priceInput.getValue(),
                description: this.descriptionInput.getValue(),
                creation_date: this.creationDateInput.getValue(),
            });

            this.props.history.push('/products');
            toastr.success("Product updated successfully.");
        }
    };

    isValidForm = () => {
        if (this.nameInput.isEmpty()) {
            toastr.error("Name is required.");

            return false;
        } else if (this.priceInput.isEmpty()) {
            toastr.error("Price is required.");

            return false;
        } else if (this.creationDateInput.isEmpty()) {
            toastr.error("Creation date is required.");

            return false;
        }

        return true;
    };

    componentDidMount() {
        const {product} = this.props;

        this.nameInput.setValue(product.name);
        this.priceInput.setValue(product.price);
        this.descriptionInput.setValue(product.description);
        this.creationDateInput.setValue(product.creation_date);
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                    <label>Name</label>

                    <Text placeholder="Product Name" ref={(input) => this.nameInput = input}/>

                </div>

                <div className="form-group">
                    <label>Price</label>
                    <div className="input-group">

                        <Number placeholder="Product Price" ref={(input) => this.priceInput = input}/>

                        <div className="input-group-append">
                            <span className="input-group-text">$</span>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label>Description</label>

                    <Textarea placeholder="Product Description" ref={(input) => this.descriptionInput = input}/>

                </div>

                <div className="form-group">
                    <label>Creation Date</label>

                    <Datepicker placeholder="Creation Date" ref={(input) => this.creationDateInput = input}/>

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