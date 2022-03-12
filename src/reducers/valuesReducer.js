/* eslint-disable import/no-anonymous-default-export */
import { actionsTypes } from '../constants';


const INITIAL_STATE = {
    values:[],
    externalValues: []
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case actionsTypes.GET_VALUES:
            return { ...state, values:action.payload.data }
        case actionsTypes.GET_EXTERNAL_VALUES:
            console.log(state);
            return { ...state, externalValues: action.payload.data }
      default: 
          return state;
    }
}