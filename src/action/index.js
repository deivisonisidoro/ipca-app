import api from '../services/api';
import { actionsTypes } from '../constants';



/* AUTHENTICATION */
export async function getValues(){
    const response = await api.get('/values');
    return { type: actionsTypes.GET_VALUES, payload: response.data };
}