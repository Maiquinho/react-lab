import { Link } from 'react-router-dom';

export function About(){

    return(
        <div className="standard-padding">
            <h1>Página sobre</h1>

            <ul>
                <li>
                    <Link to="/about/michael">Michael</Link>
                </li>
                <li>
                    <Link to="/about/reactlab">React Lab</Link>
                </li>
            </ul>
        </div>
    )
}