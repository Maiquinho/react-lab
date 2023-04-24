import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Employees, ActionType } from '../../types/Employees';


const initialState: Employees = [];

function reducer(state: Employees, action: ActionType){

    switch(action.type){
        case 'ADD':
            if(action.payload?.name){
                let newState = [...state];
                newState.push({
                    id: uuidv4(),
                    name: action.payload?.name
                });

                return newState;
            }
        break;

        case 'DEL':
            if(action.payload?.id){
                let newState = [...state];
                newState = newState.filter(stateItem => stateItem.id !== action.payload?.id);
                return newState;
            }
        break;

        case 'SORT':
            let newState = [...state];
            newState = newState.sort((a, b) => (a.name > b.name) ? 1 : -1);
            return newState;
        break;

    }

    return state;
}


export function useEmployeeReducer(){
    return useReducer(reducer, initialState);
}