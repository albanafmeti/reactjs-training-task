import React from 'react';
import ProductDetails from "./ProductDetails";

const DetailsContainer = () => {
    return (
        <div className="card">
            <h5 className="card-header">Product Name

                <a href="#" className="btn btn-sm btn-link pull-right"><i
                    className="fa fa-arrow-left"></i>&nbsp;&nbsp;Back to
                    list</a>
            </h5>
            <div className="card-body">

                <ProductDetails/>

            </div>
        </div>
    );
};

export default DetailsContainer;