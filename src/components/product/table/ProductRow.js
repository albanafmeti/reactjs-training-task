import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

class ProductRow extends Component {

    static propTypes = {
        product: PropTypes.object.isRequired,
        updateProduct: PropTypes.func.isRequired,
        removeProduct: PropTypes.func.isRequired,
    };

    onRowCLick = (e) => {
        e.preventDefault();

        if (e.target.parentElement.className === 'product-row') {
            let path = `/products/${this.props.product.id}/details`;
            this.props.history.push(path);
        }
    };

    render() {

        const {product, removeProduct} = this.props;

        return (
            <tr className="product-row" onClick={this.onRowCLick}>

                <th scope="row">{product.id}</th>
                <td><Link className="btn btn-link" to={`/products/${product.id}/details`}>{product.name}</Link></td>
                <td>{product.price} $</td>
                <td>{product.creation_date.format('YYYY/MM/DD')}</td>
                <td>

                    <Link to={`/products/${product.id}/edit`} className="btn btn-success mr-1"
                          title="Edit"><span className="fa fa-pencil"></span></Link>

                    <a className="btn btn-danger mr-1" title="Remove" onClick={() => {
                        if (window.confirm('Are you sure you want to remove this record?')) {
                            removeProduct(product.id);
                        }
                    }}>
                        <span className="fa fa-times"></span>
                    </a>

                </td>

            </tr>
        );
    }
}

export default withRouter(ProductRow);