import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: {
        items: [],
        status: 'loading'
    }
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducer: {},
})

export const postReducer = postsSlice.reducer;