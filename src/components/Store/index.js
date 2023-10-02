import { configureStore } from "@reduxjs/toolkit";
import logFlage from "./Slice/logFlage";
import wishlistSlice from "./Slice/movieSlice";
//wating for reducer
let store = configureStore({
    reducer: {
        logFlage,
        wishlistSlice,
   
    }
})
export default store;