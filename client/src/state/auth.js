import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const existingToken = window.localStorage.getItem('token');
if (existingToken) {
    axios.defaults.headers.common['auth-token'] = existingToken;
}


export const userLogin = createAsyncThunk(
    "user/login",
    async (userData, thunkAPI) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                },
            }

            const res = await axios.post(
                'http://127.0.0.1:5000/api/auth/login',
                { email: userData.email, password: userData.password },
                config
            );


            
            if (res.status !== 200) {
                throw new Error(
                    (res.data && res.data.msg) || 'Login request failed'
                );
            }

            const token = res.data.token; // expect plain string

            if (
                !token ||
                typeof token !== 'string' ||
                token.split('.').length !== 3
            ) {
                throw new Error(
                    (res.data && res.data.msg) || 'Invalid login response'
                );
            }

            window.localStorage.setItem('token', token);
            axios.defaults.headers.common['auth-token'] = token;

            // Load user profile
            thunkAPI.dispatch(loadUserData());

            return thunkAPI.fulfillWithValue(token);
        } catch (error) {
            const msg =
                (error.response && error.response.data &&
                    (error.response.data.msg || error.response.data)) ||
                error.message ||
                'Unknown error';
            console.log('userLogin error:', msg);
            return thunkAPI.rejectWithValue(msg);
        }
    }
);

export const loadUserData = createAsyncThunk(
    'load/user',
    async (thunkAPI) => {

        if (window.localStorage.token) {
            axios.defaults.headers.common['auth-token'] = window.localStorage.token;
        }

        try {
            
            const res = await axios.get('http://127.0.0.1:5000/api/users/');

            return res.data;

        } catch (error) {
            const msg =
                (error.response && error.response.data &&
                    (error.response.data.msg || error.response.data)) ||
                error.message ||
                'Unknown error';
            console.log('loadUserData error:', msg);
            return thunkAPI.rejectWithValue(msg);
        }
    }
);

const  authSlice = createSlice({
    name: "auth",
    initialState: {
        token: window.localStorage.getItem('token') || null,
        isAuthenticated: !!window.localStorage.getItem('token'),
        loading: false,
        errors: null,
        user: null
    },
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
            window.localStorage.removeItem('token');
            delete axios.defaults.headers.common['auth-token'];
        }
    },
    extraReducers: (builder) => {
        //User login
        builder.addCase(userLogin.pending,  (state) => {
            state.loading = true;
            state.errors = null;
            state.isAuthenticated = false;
            state.token = null;
            window.localStorage.removeItem('token');
            delete axios.defaults.headers.common['auth-token'];
        })
        .addCase(userLogin.fulfilled, (state, action) => {
            // payload is the raw token string
            state.token = action.payload;
            state.loading = false;
            state.isAuthenticated = true;
            state.errors = null;
        })
        .addCase(userLogin.rejected, (state, action) => {
            state.errors = action.payload;
            state.loading = false;
            state.isAuthenticated = false;
            state.token = null;
            window.localStorage.removeItem('token');
        })

        //Load user data
        .addCase(loadUserData.pending, (state, action) => {
            state.loading = true;
            state.user = null;
        })
        .addCase(loadUserData.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.errors = null;
            state.user = action.payload;
            
            if (!state.token && action.payload.token) {
                state.token = action.payload.token;
            }
        })
        .addCase(loadUserData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.user = null;
        })

    },
    
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
