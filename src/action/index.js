import api from '../services/api';
import externalApi from '../services/externalApi';
import { actionsTypes } from '../constants';



/* GET VALUES MY API */
export async function getValues(){
    const response = await api.get('/values');
    return { type: actionsTypes.GET_VALUES, payload: response };
}

/* GET VALUES FROM EXTERNAL API */
export async function getExternalValues(initialDate, finalDate){
    const response = await externalApi(`${initialDate}&dataFinal=${finalDate}`) ;
    return { type: actionsTypes.GET_EXTERNAL_VALUES, payload: response };
}