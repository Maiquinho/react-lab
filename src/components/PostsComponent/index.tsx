import { useEffect, useState } from 'react';
import { PostComponent } from '../PostComponent';
import './styles.css';
import { Post } from '../../types/Post';


export function PostsComponent() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        handlePosts();
    })

    async function handlePosts(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();

        setPosts(json);
    }

    return (
        <article className="posts-article">
            <h2>Posts</h2>

            {posts.map((post, i) => <PostComponent key={i} {...post} />) }
        </article>
    )
}