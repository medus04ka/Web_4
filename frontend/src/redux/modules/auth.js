import authAPI from "../../api/authAPI";
import {clearEntries, getEntries} from './table';
import {clearCurrent} from './values';

const SET_LOADING = 'webik4/auth/SET_LOADING';
const SET_SERVER_ERR_MES = 'webik4/auth/SET_SERVER_ERR_MES';
const SET_LOGGED_USER = 'webik4/auth/SET_LOGGED_USER';

const initialState = {
    isLoading: false,
    loggedUser: '',
    serverErrMess: ''
};

export default function authReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_LOADING:
            return Object.assign(
                {},
                state,
                {
                    isLoading: action.value
                }
            );
        case SET_SERVER_ERR_MES:
            return Object.assign(
                {},
                state,
                {
                    serverErrMess: action.value
                }
            );
        case SET_LOGGED_USER:
            console.log('Dispatching SET_LOGGED_USER:', action.value);
            return Object.assign(
                {},
                state,
                {
                    loggedUser: action.value
                }
            );
        default:
            return state;
    }
}

export function setLoading(value) {
    return {type: SET_LOADING, value};
}

export function setServerErrMes(value) {
    return {type: SET_SERVER_ERR_MES, value};
}

export function setLoggedUser(value) {
    return {type: SET_LOGGED_USER, value};
}

export const initializeAuth = () => (dispatch) => {
    let currentUser = JSON.parse(localStorage.getItem('userWP4'));
    if (currentUser !== null) {
        dispatch(setLoggedUser(currentUser.username));
        dispatch(getEntries());
    }
}
export const login = (username, password) => (dispatch) => {
    dispatch(setLoading(true));
    authAPI.login(username, password)
        .then(response => {
            console.log('API response:', response.data);
            if (response.status === 200) {
                localStorage.setItem('userWP4', JSON.stringify(response.data));
                dispatch(setLoggedUser(response.data.username));
                dispatch(getEntries());
            } else {
                alert(`Unexpected response ${response.status}`);
            }
            dispatch(setLoading(false));
        })
        .catch(e => {
            if (e.response.status === 400) {
                dispatch(setServerErrMes(e.response.data));
            } else {
                alert(`Unexpected response ${e.response.status}`);
            }
            dispatch(setLoading(false));
        });
}

export const register = (username, password) => (dispatch) => {
    dispatch(setLoading(true));
    authAPI.register(username, password)
        .then(response => {
            if (response.status === 200) {
                dispatch(login(username, password));
            } else {
                console.log(response);
                alert(`Unexpected response ${response.status}`);
            }
            dispatch(setLoading(false));
        })
        .catch(e => {
            if (e.response.status === 400) {
                dispatch(setServerErrMes(e.response.data));
            } else {
                console.log(e.response);
                alert(`Unexpected response ${e.response.status}`);
            }
            dispatch(setLoading(false));
        });
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userWP4');
    dispatch(setLoggedUser(''));
    dispatch(clearCurrent());
    dispatch(clearEntries());
}