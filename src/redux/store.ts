import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import {productDetailReducer, productListReducer} from "./reducers/product.reducer";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailReducer
})

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof store.getState>;