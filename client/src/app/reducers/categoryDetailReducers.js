import * as types from '../constants/categoryDetailConstants';

const INITIAL_STATE = {
    categoryDetails: [],
}

export const getAllCategoryDetails = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_ALL_CATEGORY_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.GET_ALL_CATEGORY_DETAILS_SUCCESS:
            return {
                loading: false,
                categoryDetails: action.payload,
            }
        case types.GET_ALL_CATEGORY_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}