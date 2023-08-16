import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {

    },
    reducers:{
        cacheSuggestions : (state,action) => {
            state = Object.assign(state , action.payload);
        }
    }
})

export const {cacheSuggestions} = searchSlice.actions;

export default searchSlice.reducer