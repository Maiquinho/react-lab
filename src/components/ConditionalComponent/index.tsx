import { useState } from "react";

import "./styles.css";


export function ConditionalComponent(){
    const [show, setShow] = useState(false);
    const componentText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad explicabo quisquam odit cum! Impedit laboriosam, necessitatibus sed, debitis ad unde quae natus porro quos minus, placeat quia perspiciatis vel ab.';


    function handleTextComponent(){
        setShow( !show );
    }


    return (
        <div className="conditional-component">
            <div className="conditional-component-box">
                { show ? componentText : 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' }
            </div>

            <button onClick={handleTextComponent}>Show Component</button>

            <small>Click in the button above to show the full content of component.</small>
        </div>

    )
}