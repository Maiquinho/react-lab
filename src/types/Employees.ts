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