import { useReducer } from 'react';
import { ReducerState, ReducerAction } from '../../types/Reducer';

import './styles.css';



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


export function ReducerComponent() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            Contagem: {state.count}

            <div className="reducer-count-buttons">
                <button onClick={() => dispatch({ type: 'ADD' })}>Adicionar</button>
                <button onClick={() => dispatch({ type: 'DEL' })}>Remover</button>
                <button onClick={() => dispatch({ type: 'RESET' })}>Resetar</button>
            </div>
        </div>
    )
}