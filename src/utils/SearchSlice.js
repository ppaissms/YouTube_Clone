import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: "searchStore",
    initialState: {},
    reducers: {
        cacheResult: (state, action) => {
            // action is an obj {"i",["iphone","",....]}
            state = Object.assign(state, action.payload);
        }
    }
});

export const { cacheResult } = SearchSlice.actions;
export default SearchSlice.reducer;
