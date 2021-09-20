import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getAllCategoriesReducer } from './reducers/categoryReducers';
import { getAllCategoryDetails } from './reducers/categoryDetailReducers';

const reducer = combineReducers({
    categories: getAllCategoriesReducer,
    categoryDetails: getAllCategoryDetails,
})

const middleware = [thunk];

const store  = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;