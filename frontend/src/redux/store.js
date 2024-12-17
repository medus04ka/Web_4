import { configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import reducer from "./reducer";

// Create the store using configureStore
const store = configureStore({
    reducer, // Replace with an object of reducers if you have multiple slices
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;