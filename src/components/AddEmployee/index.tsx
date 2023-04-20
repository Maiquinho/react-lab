import { useState } from "react";
import { EmployeeField, EmployeeSubmitForm } from '../../types/Employees';

import './styles.css';


export function AddEmployee({ onAdd }: EmployeeSubmitForm) {
    const [employeeField, setEmployeeField] = useState('');


    function handleEmployeeField(e: EmployeeField) {
        setEmployeeField(e.target.value);
    }

    function handleAddEmployee(){
        onAdd(employeeField);
        setEmployeeField('');
    }


    return (
        <fieldset className="add-employee-fieldset">
            <legend>Adicionar novo funcionário</legend>

            <input type="text" placeholder='Digite o nome do funcionário' onChange={handleEmployeeField} value={employeeField} />
            <button onClick={handleAddEmployee}>Cadastrar</button>
        </fieldset>
    )
}