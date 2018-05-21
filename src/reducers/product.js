import * as ProductActionTypes from '../actiontypes/product';
import moment from 'moment';

export default function Product(state, action) {

    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS:

            let newState = null;

            if (action.query) {

                let filteredProducts = state.products.filter(function (product) {
                    return product.name.toLowerCase().indexOf(action.query.toLowerCase()) !== -1;
                });
                newState = Object.assign({}, state, {
                    filteredProducts: filteredProducts
                });
            } else {
                newState = Object.assign({}, state, {
                    filteredProducts: state.products
                });
            }
            return newState;

        case ProductActionTypes.ADD_PRODUCT:

            let products = state.products;

            let {[products.length - 1]: lastProduct} = products;
            let nextId = lastProduct.id + 1;

            products.push({
                id: nextId,
                name: action.data.name,
                price: action.data.price,
                description: action.data.description,
                creation_date: moment(new Date()).format("YYYY/MM/DD"),
            });

            return Object.assign({}, state, {
                products: products
            });
        case ProductActionTypes.UPDATE_PRODUCT:
            break;
        case ProductActionTypes.REMOVE_PRODUCT:
            break;
        default:
            return state;
    }
}
