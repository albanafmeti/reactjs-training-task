import React, {Component} from 'react';
import PropTypes from "prop-types";

class AddProduct extends Component {

    static propTypes = {
        addProduct: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="modal fade" id="add-product-modal" tabIndex="-1" role="dialog" aria-labelledby="Add Product"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" className="form-control" placeholder="Product Name"/>
                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" placeholder="Price"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text">$</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea className="form-control" placeholder="Product Description"
                                              rows="3"></textarea>
                                </div>

                                <p className="text-right m-0">

                                    <button type="button" className="btn btn-outline-secondary pull-left"
                                            data-dismiss="modal">Close
                                    </button>

                                    <button type="submit" className="btn btn-primary">
                                        <i className="fa fa-plus"></i>&nbsp;&nbsp;Add
                                    </button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProduct;