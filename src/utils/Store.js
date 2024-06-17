import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice";
import SearchSlice from "./SearchSlice";
import CommentSlice from "./CommentSlice";

const store = configureStore({
    reducer: {
        app: NavSlice,
        searchStore: SearchSlice,
        liveChat: CommentSlice
    }
});

export default store;