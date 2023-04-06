import './styles.css';
import { Post } from '../../types/Post';

export function PostComponent({id, title, body, userId}: Post){


    return(
        <article className="post-article">
            <h2>{title}</h2>
            <small># {id} - Usuário: {userId}</small>
            <p>{body}</p>
        </article>
    )
}