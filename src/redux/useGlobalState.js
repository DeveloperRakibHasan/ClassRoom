import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    event:{}
}

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers:{
       addEvents:(state, {payload}) => {
           state.event = payload;
       }
    }
});

export const {addEvents} = eventSlice.actions;
export const getAllEvent = (state) => state.event.event;
export default eventSlice.reducer;