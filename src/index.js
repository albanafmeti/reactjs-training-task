import React from 'react';

import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import ProductReducer from './reducers/product';
import PRODUCTS from './data/products';

let initialState = {
    products: PRODUCTS,
    filteredProducts: [],
};

let store = createStore(ProductReducer, initialState);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
