import { useEffect, useState } from 'react';
import './styles.css';

export function UseEffect(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    
    useEffect(() => {

        setFullName(`${firstName} ${lastName}`);

    }, [firstName, lastName])


    return(
        <div>
            <form>
                <input placeholder="Digite seu NOME" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                <input placeholder="Digite seu SOBRENOME" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />

                {fullName && 
                    <p>Nome completo: {fullName}</p>
                }
            </form>
        </div>
    )
}