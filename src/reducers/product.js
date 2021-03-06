import * as ProductActionTypes from '../actiontypes/product';
import moment from 'moment';

export default function Product(state, action) {

    let products = state.products;
    let filteredProducts = state.filteredProducts;

    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS:

            if (action.query) {

                let filteredProducts = state.products.filter(function (product) {
                    return product.name.toLowerCase().indexOf(action.query.toLowerCase()) !== -1;
                });

                return {
                    ...state,
                    filteredProducts: filteredProducts,
                    isFiltered: true
                };

            } else {
                return {
                    ...state,
                    filteredProducts: state.products,
                    isFiltered: false
                }
            }

        case ProductActionTypes.ADD_PRODUCT:

            let {[products.length - 1]: lastProduct} = products;
            let nextId = lastProduct.id + 1;

            let newProduct = {
                id: nextId,
                name: action.data.name,
                price: action.data.price,
                description: action.data.description,
                creation_date: moment(new Date()),
            };

            products.push(newProduct);

            return {
                ...state,
                products: [...products],
                filteredProducts: [...products],
                isFiltered: false
            };


        case ProductActionTypes.UPDATE_PRODUCT:

            products = products.map(function (product) {
                if (product.id === action.id) {
                    product.name = action.data.name;
                    product.price = action.data.price;
                    product.description = action.data.description;
                    product.creation_date = action.data.creation_date;
                }
                return product;
            });

            return {
                ...state,
                products: [...products],
                filteredProducts: [...products],
            };


        case ProductActionTypes.REMOVE_PRODUCT:

            products = products.filter(function (product) {
                return product.id !== action.id;
            });

            filteredProducts = filteredProducts.filter(function (product) {
                return product.id !== action.id;
            });

            return {
                ...state,
                products: products,
                filteredProducts: filteredProducts
            };

        default:
            return state;
    }
}
