import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { v4 as uuidv4 } from 'uuid';


const storedToken = localStorage.getItem('token');

let userObject;

let guestId = localStorage.getItem('guestId');

if(storedToken) {
    const decodedToken = jwtDecode(storedToken);
    userObject = {
        id: decodedToken.userId,
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
        email: decodedToken.sub,
        role: decodedToken.role,
        isGuest: false
    }

    if(guestId) {
        localStorage.removeItem('guestId')
    }

} else {
    userObject = {
        id: -1,
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        isGuest: true,
    }
    if(!guestId){
        localStorage.setItem('guestId', uuidv4());
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