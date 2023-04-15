import { useReducer } from 'react';
import { ReducerState, ReducerAction } from '../../types/Reducer';


const initialState = { count: 0 };

function reducer(state: ReducerState, action: ReducerAction) {

    switch (action.type) {
        case "ADD":

            return { ...state, count: state.count + 1 };
            break;

        case "DEL":

            if (state.count > 0) {
                return { ...state, count: state.count - 1 };
            }
            break;

        case "RESET":

            return initialState;
            break;

    }

    return state;

}


export function useCountReducer(){
    return useReducer(reducer, initialState);
}
