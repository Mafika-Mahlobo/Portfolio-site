import { createSlice } from "@reduxjs/toolkit"

const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        msg: null,
        type: null
    },
    reducers: {
        dispatchAlert: (state, action) => {
            state.msg = action.payload.msg;
            state.type = action.payload.type;
        },
        clearAlert: (state) => {
            state.msg = null,
            state.type = null
        }
    }
});

export default alertSlice.reducer;
export const { dispatchAlert, clearAlert } = alertSlice.actions;