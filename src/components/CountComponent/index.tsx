import { useEffect, useState } from "react";

import './styles.css';


export function CountComponent(){
    const [count, setCount] = useState(0);

    function handleClickButton(){
        setCount(count + 1);
    }

    useEffect(() => {

        const title = (count != 0) ? `You have clicked ${count}` : document.title;

        document.title = title;

    }, [count]);


    return(
        <div className="count-component">
            <div>Count: {count}</div>
            
            <button onClick={handleClickButton}>Count</button>
        </div>
    )
}