import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import {productDetailReducer, productListReducer, reviewProductReducer} from "./reducers/product.reducer";
import {cartReducer} from "./reducers/cart.reducer";
import {updateUserProfileReducer, userDetailsReducer, userLoginReducer} from "./reducers/user.reducer";
import {createOrderReducer} from "./reducers/order.reducer";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailReducer,
    productReview: reviewProductReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: updateUserProfileReducer,
    createOrder: createOrderReducer
})

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof store.getState>;