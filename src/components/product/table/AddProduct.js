import React, {Component} from 'react';
import PropTypes from "prop-types";
import toastr from 'toastr';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

import Text from "../../general/input/Text";
import Number from "../../general/input/Number";
import Textarea from "../../general/input/Textarea";

class AddProduct extends Component {

    static propTypes = {
        addProduct: PropTypes.func.isRequired
    };

    state = {
        modal: false,
    };

    toggleModal = () => {
        this.setState({
            ...this.state,
            modal: !this.state.modal
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.isValidForm()) {

            this.props.addProduct({
                name: this.nameInput.getValue(),
                price: this.priceInput.getValue(),
                description: this.descriptionInput.getValue(),
            });

            this.toggleModal();

            toastr.success("Product added successfully.");
        }
    };

    isValidForm = () => {

        if (this.nameInput.isEmpty()) {
            toastr.error("Name is required.");

            return false;
        } else if (this.priceInput.isEmpty()) {
            toastr.error("Price is required.");

            return false;
        }

        return true;
    };

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.modal !== nextState.modal;
    }

    render() {
        return (
            <div className="d-inline">

                <button className="btn btn-sm btn-primary pull-right" onClick={this.toggleModal}>
                    <i className="fa fa-plus"></i> Add Product
                </button>

                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>

                    <ModalHeader toggle={this.toggleModal}>Add Product</ModalHeader>

                    <ModalBody>
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

                                <Textarea placeholder="Product Description"
                                          ref={(input) => this.descriptionInput = input}/>

                            </div>

                            <p className="text-right m-0">

                                <button type="button" className="btn btn-outline-secondary pull-left"
                                        onClick={this.toggleModal}>Close
                                </button>

                                <button type="submit" className="btn btn-primary">
                                    <i className="fa fa-plus"></i>&nbsp;&nbsp;Add
                                </button>
                            </p>
                        </form>
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

export default AddProduct;