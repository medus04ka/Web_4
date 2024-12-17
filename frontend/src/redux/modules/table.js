import entryAPI from "../../api/entryAPI";
import {setLoading, logout} from './auth';

const SET_ENTRIES = 'webik4/table/SET_ENTRIES';
const CLEAR_ENTRIES = 'webik4/table/CLEAR_ENTRIES';
const ADD_ENTRY = 'webik/table/ADD_ENTRY';

const initialState = {
    entries: []
};

export default function tableReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_ENTRIES:
            return Object.assign(

                {},
                state,
                {
                    entries: action.value
                }
            );
        case CLEAR_ENTRIES:
            return Object.assign(
                {},
                state,
                {
                    entries: []
                }
            );
        case ADD_ENTRY:
            return Object.assign(
                {},
                state,
                {
                    entries: [...state.entries, action.value]
                }
            );
        default:
            return state;
    }
}

export function setEntries(value) {
    return {type: SET_ENTRIES, value};
}
export function clearEntries() {
    return {type:CLEAR_ENTRIES};
}
export function addEntry(value) {
    return {type:ADD_ENTRY, value};
}

export const getEntries = () => (dispatch) => {
    dispatch(setLoading(true));
    entryAPI.getEntries(JSON.parse(localStorage.getItem('userWP4')).jwt)
        .then(response => {
            if(response.status === 200) {
                dispatch(setEntries(response.data));
            } else {
                alert(`Unexpected response ${response.status}`);
            }
            dispatch(setLoading(false));
        })
        .catch(e => {
            if(e.response.status === 401) {
                dispatch(logout());
            } else {
                alert(`Unexpected response ${e.response.status}`);
            }
            dispatch(setLoading(false));
        });
}