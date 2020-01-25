import { combineReducers} from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';

const rooterReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default rooterReducer;