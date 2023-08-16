import { configureStore } from "@reduxjs/toolkit";
import MenuToggleSlice from "./menuToggleSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

export const store = configureStore({
    reducer:{
        menu: MenuToggleSlice,
        cache : searchSlice,
        chat : chatSlice,
    }
})