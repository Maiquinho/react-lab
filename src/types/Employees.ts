import { ChangeEvent } from "react";

interface Employee {
    id: string;
    name: string; 
}

export type Employees = Employee[];

export type ActionType = {
    type: string;
    payload?: {
        name?: string;
        id?: string;
    }
}

export type EmployeeField = ChangeEvent<HTMLInputElement>;

export type EmployeeSubmitForm = {
    onAdd: (newEmployee: string) => void;
}