import { useEmployeeReducer } from '../../hooks/reducers/employeeReducer';
import { AddEmployee } from '../AddEmployee';
import { Trash, SortDescending } from '@phosphor-icons/react';

import './styles.css';


export function EmployeeList() {
    const [employeeListState, employeeListDispatch] = useEmployeeReducer();


    return (
        <div className='employee-list'>
            <AddEmployee
                onAdd={newEmployee => employeeListDispatch({
                    type: 'ADD',
                    payload: {
                        name: newEmployee
                    }
                })}
            />



            {employeeListState.length > 0 &&

                <section className='employee-section'>

                    <div className='employee-title'>
                        <h2>Lista de Funcionários</h2>
                        {employeeListState.length > 1 ? 
                            <SortDescending size={24} weight="bold" onClick={() => employeeListDispatch({ type: 'SORT' })} /> : <SortDescending size={24} weight="bold" color='#929292de' />
                        }
                    </div>


                    {employeeListState.map((employeeListItem, index) => (

                        <div className='employee-card' key={index}>
                            <div className='employee-card__info'>
                                <h3>{employeeListItem.name}</h3>
                                <small>id: {employeeListItem.id}</small>
                            </div>
                            <button onClick={() => employeeListDispatch({ type: 'DEL', payload: { id: employeeListItem.id } })}>
                                <Trash size={16} color="#d20000" weight="bold" />
                            </button>
                        </div>

                    ))}

                </section>

            }


        </div>
    )
}