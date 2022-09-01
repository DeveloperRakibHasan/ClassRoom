import {configureStore} from "@reduxjs/toolkit";
import eventReducer from '../redux/useGlobalState'

export const store = configureStore({
    reducer: {
        event: eventReducer,
    },
});