import { useParams, useNavigate } from "react-router-dom";


export function AboutUser(){
    const params = useParams();
    const userName = (params.slug) ? params.slug.charAt(0).toUpperCase() + params.slug.substring(1) : null;
    const navigate = useNavigate();


    function backToHome(){
        navigate('/');
    }

    function backToAbout(){
        navigate('/about');
    }


    return (
        <div>
            <h1>Sobre: {userName}</h1>
            <ul>
                <li>
                    <div onClick={backToHome}>Home</div>
                </li>
                <li>
                    <div onClick={backToAbout}>Sobre</div>
                </li>
            </ul>


            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam voluptatum vero, eveniet molestias perferendis iste rerum expedita culpa architecto sit ab recusandae, iusto magnam aspernatur labore debitis adipisci, libero sunt!</p>
        </div>
    )
}