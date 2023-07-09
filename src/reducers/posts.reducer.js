import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allPosts: [],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        actionAllProducts: (state, {payload}) => {
            state.allPosts = [...payload];
        },
        actionAddProduct: (state, {payload}) => {
            state.allPosts.push(payload);
        }
    },
});
export const {
    actionAllProducts,
    actionAddProduct
} = postsSlice.actions;


export const actionFetchAllPosts = (link) => async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const products = await response.json();
    dispatch(actionAllProducts(products));
};

export default postsSlice.reducer;