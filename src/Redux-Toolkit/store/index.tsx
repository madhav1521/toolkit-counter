import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, handleShow: true }
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state,action) {
            state.counter += action.payload
        },
        toggle(state) {
            state.handleShow = !state.handleShow
        },
    }
})
const store = configureStore({
    reducer: counterSlice.reducer
});
export const counterActions = counterSlice.actions;

export default store