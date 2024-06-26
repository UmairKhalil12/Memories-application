import { LOGIN, LOGOUT, SIGNUP } from "../constants/actionTypes.js";
import * as api from "../api/index.js";

export const login = (userData) => async (dispatch) => {
    try {
        const { data } = await api.login(userData);
        dispatch({ type: LOGIN, payload: data });
        console.log("user logged in sucessfully");
    } catch (error) {
        console.log(error.message);
    }
};

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT });
    } catch (error) {
        console.log(error.message);
    }
};

export const signup = (userData) => async (dispatch) => {
    try {
        const { data } = await api.signup(userData);
        dispatch({ type: SIGNUP, payload: data });
        console.log("user created sucessfully");
    } catch (error) {
        console.log(error.message);
    }
};
