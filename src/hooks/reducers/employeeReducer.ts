import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Employees, ActionType } from '../../types/Employees';


const initialState: Employees = [];

function reducer(state: Employees, action: ActionType){

    switch(action.type){
        case 'ADD':
            if(action.payload?.name){
                state.push({
                    id: uuidv4(),
                    name: action.payload?.name
                });
            }
        break;

        case 'DEL':
            if(action.payload?.id){
                state = state.filter(stateItem => stateItem.id !== action.payload?.id);
            }
        break;

        case 'SORT':
            state = state.sort((a, b) => (a.name > b.name) ? 1 : -1);
        break;

    }

    return state;
}


export function useEmployeeReducer(){
    return useReducer(reducer, initialState);
}