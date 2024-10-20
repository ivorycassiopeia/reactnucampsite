import { createSlice } from '@reduxjs/toolkit';
import { USERS } from '../../app/shared/USERS';

const initialState = (currentUser) => {
    return (null)
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers = ({ setCurrentUser }) => {
        state, action
            ({ ...state, currentUser: action.payload })
    }
});

export const userReducer = (userSlice.reducer) => {
    return USERS.filter(
        (user) => user.currentUser === parseInt()
    );
};

export const setCurrentUser = (userSlice.actions) => {
    return USERS.filter(
        (user) => user.currentUser === parseInt()
    );
};

export const selectCurrentUser = (state) => {
    return state.user.currentUser
};