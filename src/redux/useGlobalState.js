import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    event:[],
    request: []
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers:{
       addEvents:(state, {payload}) => {
           state.event = payload;
       },
        addRequest: (state, action) => {
           state.request = action.payload;
        }
    }
});

export const {addEvents, addRequest} = eventSlice.actions;
// export const getAllEvent = (state) => state.event.event;
export default eventSlice.reducer;