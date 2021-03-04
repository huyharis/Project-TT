import {combineReducers} from 'redux'
import bill from './bill';
import cart from './cart';
import typeProductReducer from './typeProductReducer';


export default combineReducers({
    type: typeProductReducer,
    cart: cart,
    bill: bill
});