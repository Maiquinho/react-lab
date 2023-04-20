import { useEmployeeReducer } from '../../hooks/reducers/employeeReducer';
import { AddEmployee } from '../AddEmployee';

import './styles.css';


export function EmployeeList() {
    const [employeeListState, employeeListDispatch] = useEmployeeReducer();


    return (
        <div className='employee-list'>
            <h2>Lista de Funcionários</h2>

            <ul>
                {employeeListState.map((employeeListItem, index) => (
                    <li key={index}>id: {employeeListItem.id} Nome: {employeeListItem.name}</li>
                ))}
            </ul>

            <AddEmployee 
                onAdd={newEmployee => employeeListDispatch({ 
                    type: 'ADD', 
                    payload: { 
                        name: newEmployee 
                    } 
                })} 
            />

        </div>
    )
}