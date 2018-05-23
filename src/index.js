import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';

import toastr from 'toastr';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ProductReducer from './reducers/product';
import PRODUCTS from './data/products';

const initialState = {
    products: [...PRODUCTS],
    filteredProducts: [...PRODUCTS],

    isFiltered: false
};

let store = createStore(ProductReducer, initialState);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

toastr.options.progressBar = true;

registerServiceWorker();
