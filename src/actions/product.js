import * as ProductActionTypes from '../actiontypes/product';

export const addProduct = data => {
    return {
        type: ProductActionTypes.ADD_PRODUCT,
        data: data,
    }
};

export const updateProduct = (id, data) => {
    return {
        type: ProductActionTypes.UPDATE_PRODUCT,
        id: id,
        data: data,
    }
};

export const removeProduct = (id) => {
    return {
        type: ProductActionTypes.REMOVE_PRODUCT,
        id: id,
    }
};

export const fetchProducts = (query = null) => {
    return {
        type: ProductActionTypes.FETCH_PRODUCTS,
        query: query,
    }
};