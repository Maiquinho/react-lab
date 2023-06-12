import { useParams } from "react-router-dom";


export function AboutUser(){
    const params = useParams();
    const userName = (params.slug) ? params.slug.charAt(0).toUpperCase() + params.slug.substring(1) : null;

    return (
        <div>
            <h1>Sobre: {userName}</h1>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam voluptatum vero, eveniet molestias perferendis iste rerum expedita culpa architecto sit ab recusandae, iusto magnam aspernatur labore debitis adipisci, libero sunt!</p>
        </div>
    )
}