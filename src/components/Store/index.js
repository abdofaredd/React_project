import { configureStore } from "@reduxjs/toolkit";
import logFlage from "./Slice/logFlage";
//wating for reducer
let store = configureStore({
    reducer: {
        logFlage,
   
    }
})
export default store;