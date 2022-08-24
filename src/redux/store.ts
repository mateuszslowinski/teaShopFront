import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import {productDetailReducer, productListReducer} from "./reducers/product.reducer";
import {cartReducer} from "./reducers/cart.reducer";
import {updateUserProfileReducer, userDetailsReducer, userLoginReducer} from "./reducers/user.reducer";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: updateUserProfileReducer,
})

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof store.getState>;