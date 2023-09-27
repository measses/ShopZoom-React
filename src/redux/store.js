import { combineReducers, createStore, applyMiddleware } from "redux";
// @ts-ignore
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { drawerReducer } from "./reducers/drawer";
import { productsReducer } from './reducers/product';
import { productsDetailReducer } from './reducers/productDetail';
import { cardReducer } from "./reducers/card";
import { searchReducer } from './reducers/search';


const cardItems = JSON.parse(localStorage.getItem("cardItems")) || [];
let initalState = {
    card: {cardItems}
}

const reducers = combineReducers({
    drawer:drawerReducer,
    products:productsReducer,
    product:productsDetailReducer,
    card:cardReducer,
    search:searchReducer,
});

// @ts-ignore
const store = createStore(reducers, initalState,  composeWithDevTools(applyMiddleware(thunk)));  

export default store;