/* eslint-disable import/no-anonymous-default-export */
import { actionsTypes } from '../constants';

const INITIAL_STATE = {
    darkMode: false,
    menu_open: false,
    internal_search: true,
    external_search: true,
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case actionsTypes.TOGGLE_MENU:
            return { ...state, menu_open: action.payload}
        case actionsTypes.DARK_MODE:
            return { ...state, darkMode: action.payload}
        case actionsTypes.INTERNAL_SEARCH:
            return { ...state, internal_search: action.payload}
        case actionsTypes.EXTERNAL_SEARCH:
            return { ...state, external_search: action.payload}
        default: 
            return state;
    }
}   