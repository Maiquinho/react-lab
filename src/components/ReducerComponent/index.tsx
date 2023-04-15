import { useCountReducer } from '../../hooks/reducers/countReducer';

import './styles.css';


export function ReducerComponent() {

    const [countState, countDispatch] = useCountReducer();
    

    return (
        <div>
            Contagem: {countState.count}

            <div className="reducer-count-buttons">
                <button onClick={() => countDispatch({ type: 'ADD' })}>Adicionar</button>
                <button onClick={() => countDispatch({ type: 'DEL' })}>Remover</button>
                <button onClick={() => countDispatch({ type: 'RESET' })}>Resetar</button>
            </div>
        </div>
    )
}