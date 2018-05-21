import React from 'react';
import EditProduct from "./EditProduct";

const EditContainer = () => {
    return (
        <div className="card">
            <h5 className="card-header">Edit Product

                <a href="#" className="btn btn-sm btn-link pull-right"><i
                    className="fa fa-arrow-left"></i>&nbsp;&nbsp;Back to list</a>
            </h5>
            <div className="card-body">

                <EditProduct/>

            </div>
        </div>
    )
};

export default EditContainer;