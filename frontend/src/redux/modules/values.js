import entryAPI from "../../api/entryAPI";
import {logout} from "./auth";
import {setEntries, addEntry} from "./table";

const ENTER_R = 'webik4/values/ENTER_R';
const ENTER_X = 'webik4/values/ENTER_X';
const ENTER_Y = 'webik4/values/ENTER_Y';
const CLEAR_CURRENT = 'webik4/values/CLEAR_CURRENT';

const initialState = {
    rValues: [0, 1, 2, 3, 4],
    rCurrent: 1,
    xValues: [-3, -2, -1, 0, 1, 2, 3],
    xCurrent: undefined,
    yMin: -3,
    yMax:3,
    xMin: -3,
    xMax:3,
    yCurrent:undefined
};

export default function valuesReducer(state = initialState, action={}) {
    switch (action.type) {
        case ENTER_R:
            return Object.assign(
                {},
                state,
                {
                    rCurrent: action.value
                }
            );
        case ENTER_X :
            return Object.assign(
                {},
                state,
                {
                    xCurrent: action.value
                }
            );
        case ENTER_Y:
            return Object.assign(
                {},
                state,
                {
                    yCurrent: action.value
                }
            );
        case CLEAR_CURRENT:
            return Object.assign(
                {},
                state,
                {
                    rCurrent: 1,
                    xCurrent: undefined,
                    yCurrent: undefined
                }
            );
        default:
            return state;
    }
}

export function enterR(value) {
    return {type:ENTER_R, value};
}
export function enterX(value) {
    return {type:ENTER_X, value};
}
export function enterY(value) {
    return {type:ENTER_Y, value};
}
export function clearCurrent() {
    return {type:CLEAR_CURRENT};
}

export const checkEntry = () => (dispatch, getState) => {
    entryAPI.checkEntry(
        getState().values.xCurrent,
        getState().values.yCurrent,
        getState().values.rCurrent,
        JSON.parse(localStorage.getItem('userWP4')).jwt)
        .then(response => {
            if(response.status === 200) {
                dispatch(addEntry(response.data));
            } else {
                alert(`Unexpected response ${response.status}`);
            }
        })
        .catch(e => {
            if(e.response.status === 401) {
                dispatch(logout());
            } else {
                alert(`Unexpected response ${e.response.status}`);
            }
        });
}

export const clearEntries = () => (dispatch) => {
    entryAPI.clearEntries(JSON.parse(localStorage.getItem('userWP4')).jwt)
        .then(response => {
            if(response.status === 200) {
                dispatch(setEntries([]));
            } else {
                alert(`Unexpected response ${response.status}`);
            }
        })
        .catch(e => {
            if(e.response.status === 401) {
                dispatch(logout());
            } else {
                alert(`Unexpected response ${e.response.status}`);
            }
        });
}