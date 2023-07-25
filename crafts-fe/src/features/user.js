import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

const storedToken = localStorage.getItem('token');

let userObject;

if(storedToken) {
    const decodedToken = jwtDecode(storedToken);
    userObject = {
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
        email: decodedToken.sub,
        role: decodedToken.role
    }
} else {
    userObject = {
        firstName: '',
        lastName: '',
        email: '',
        role: ''
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: userObject
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        }
    }

});

export const {login} = userSlice.actions;

export default userSlice.reducer;