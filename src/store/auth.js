import {createSlice } from '@reduxjs/toolkit';

const intialAuthState = {
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: intialAuthState,
    reducers: {
        login(state) {
          console.log("Auth state: " , state);
          localStorage.setItem('isLoggedIn',true );
          // localStorage.setItem('isActive',"" );
          state.isLoggedIn = true;
        },
        logout(state) {
          console.log("logoput..: " , state);
          // localStorage.setItem('isActive',"" );
          localStorage.setItem('isLoggedIn',false );
          localStorage.setItem('isActive','' );
          state.isLoggedIn = false;
          // eslint-disable-next-line no-restricted-globals
          setTimeout(() => location.reload(), 1000);
        },
      },
})

export const authActions = authSlice.actions;

export default authSlice.reducer;
