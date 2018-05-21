import React, {Component} from 'react';

class EditProduct extends Component {
    render() {
        return (
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
                    <textarea className="form-control" placeholder="Product Description" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label>Creation Date</label>
                    <input type="text" name="name" className="form-control" placeholder="Creation Date"
                           id="creation-date"/>
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

export default EditProduct;