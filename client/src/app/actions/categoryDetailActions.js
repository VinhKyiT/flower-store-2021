import * as types from '../constants/categoryDetailConstants';
import axios from 'axios';

export const getAllCategoryDetails = () => async (dispatch) => {
    try {
        dispatch({type: types.GET_ALL_CATEGORY_DETAILS_REQUEST});
        const { data } = await axios.get('api/category-detail/');
        dispatch({type: types.GET_ALL_CATEGORY_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: types.GET_ALL_CATEGORY_DETAILS_FAILURE, payload: error.message});
    }
}