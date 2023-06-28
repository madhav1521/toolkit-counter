import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, handleShow: true }
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter += action.payload
        },
        addInput(state,action) {
            state.counter += action.payload
        },
        toggle(state) {
            state.handleShow = !state.handleShow
        },
    }
});

const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;

        }
    }
})
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store