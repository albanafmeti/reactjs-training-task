import React, {Component} from 'react';

class ProductDetails extends Component {
    render() {
        return (
            <table className="table">
                <tbody>
                <tr>
                    <th scope="row">Name</th>
                    <td>USB Card</td>
                </tr>
                <tr>
                    <th scope="row">Price</th>
                    <td>10 $</td>
                </tr>
                <tr>
                    <th scope="row">Creation Date</th>
                    <td>2018/05/23</td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <p><strong>Description</strong></p>
                        <p>We put here the descriptiono of the product. We put here the descriptiono of the product.
                            We put here the descriptiono of the product. </p>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default ProductDetails;