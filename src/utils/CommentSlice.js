import { createSlice } from "@reduxjs/toolkit";

const CommentSlice = createSlice({
    name: "Comment",
    initialState: {
        messages: []
    },
    reducers: {
        addComments: (state, action) => {
            state.messages.splice(15, 1);
            state.messages.unshift(action.payload);
        }
    }
});

export const { addComments } = CommentSlice.actions;
export default CommentSlice.reducer;