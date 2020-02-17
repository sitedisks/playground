import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { combineReducers} from 'redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
    cart: [
        {
            product: 'bread 800g',
            quantity: 2,
            unitCost: 90
        },{
            product: 'milk 400ml',
            quantity: 1,
            unitCost: 47
        }
    ]
}

// action is the container: type, payload
const productsReducer = function (state=[], action) {
    return state;
}



const ADD_TO_CART = 'ADD_TO_CART';
const cartReducer = function(state=initialState, action){
    switch (action.type){
        case ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        }
        default: return state;
    }
}

function addToCart(product, quantity, unitCost){
    return {
        type: ADD_TO_CART,
        item: {
            product,quantity,unitCost
        }
    }
}


const allReducers = {
    products: productsReducer,
    shoppingCart: cartReducer
}

const rootReducer =combineReducers(allReducers);

let store = createStore(rootReducer);
console.log("initial state: ", store.getState());

// store.subscribe(listener) and store.dispatch(action);
let unsubscribe = store.subscribe(()=>{
    console.log("updated state: ", store.getState());
});

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Juice 2L', 1, 250));

unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
