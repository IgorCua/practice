import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Hello',
    lastName: 'Hello world!'
}

const user = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        name: (state, action) => {
            state.name = action.payload;
        },
        lastName: (state, action) => {
            state.lastName = action.payload;
        }
        
    },
    extraReducers: (builder) => {
        
    }
});

export const {actions, reducer} = user;

const userReducer = reducer;

export const store = configureStore({
    reducer: {
        slice: userReducer
    }
})