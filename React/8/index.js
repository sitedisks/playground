const redux = require('redux')

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
    return {
        type: BUY_CAKE
    }
}

// (previousState, action) => newState

const initialState = {
    numberOfCakes: 10
}

// Three dots is ES6 syntax suger: spread operator
// : create copy of an object.

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        };
        default: return state;
    }
}

const store = createStore(reducer);
console.log('Initial state: ', store.getState());

const unsubscribe = store.subscribe(()=>console.log('Updated state: ', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

// unsubscribe();
