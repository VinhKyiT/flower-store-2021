import * as types from '../constants/categoryConstants';

const INITIAL_STATE = {
    list: [],
}
export const getAllCategoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_ALL_CATEGORIES_REQUEST:
            return {
                loading: true,
                list: [],
            };
        case types.GET_ALL_CATEGORIES_SUCCESS:
            return {
                loading: false,
                list: action.payload,
            }
        case types.GET_ALL_CATEGORIES_FAILURE:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}