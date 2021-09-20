import * as types from '../constants/categoryConstants';
import axios from 'axios';

export const getAllCategories = () => async dispatch => {
    try {
        dispatch({type: types.GET_ALL_CATEGORIES_REQUEST});
        const {data} = await axios.get('/api/category');
        dispatch({type: types.GET_ALL_CATEGORIES_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: types.GET_ALL_CATEGORIES_FAILURE, payload: error.message});
    }
}