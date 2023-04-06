import { useEffect, useState } from 'react';
import { Loading } from '../Loading';
import { PostComponent } from '../PostComponent';
import './styles.css';
import { Post } from '../../types/Post';


export function PostsComponent() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        handlePosts();
    })

    async function handlePosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await response.json();

            setLoading(false);
            setPosts(json);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    return (
        <>
            {loading ? <Loading /> :

                (
                    <>
                        {posts.length > 0 ? (

                            <article className="posts-article">
                                <div className="posts-article__title">
                                    <h2>Posts</h2>
                                    <small>Total: {posts.length}</small>
                                </div>

                                {posts.map((post, i) => <PostComponent key={i} {...post} />)}
                            </article>

                        ) : (

                            <article className="posts-article">
                                <div className="posts-article__title">
                                    <h2>Você não tem posts</h2>
                                </div>
                            </article>

                        )}
                    </>
                )
                
            }
        </>
    )
}