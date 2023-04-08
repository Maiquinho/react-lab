import { ChangeEvent, InputHTMLAttributes, TextareaHTMLAttributes, useEffect, useState } from 'react';
import { Loading } from '../Loading';
import { PostComponent } from '../PostComponent';
import './styles.css';
import { Post } from '../../types/Post';


export function PostsComponent() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);
    const [fieldPost, setFieldPost] = useState({ title: '', body: '' });

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

    function handleFieldPost(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {

        switch (e.target.localName) {
            case 'input':
                setFieldPost(prevField => {
                    return {
                        ...prevField,
                        title: e.target.value
                    }
                })
                break;

            case 'textarea':
                setFieldPost(prevField => {
                    return {
                        ...prevField,
                        body: e.target.value
                    }
                })
                break;
        }
    }

    function handleAddPost() {
        alert(`Título: ${fieldPost.title} \n Corpo: ${fieldPost.body}`)
    }



    return (
        <>
            {loading ? <Loading /> :

                (
                    <>
                        <fieldset>
                            <legend>Adicionar novo post</legend>

                            <input type="text" placeholder='Título do Post' onChange={handleFieldPost} value={fieldPost.title} />
                            <textarea placeholder='Corpo do Post' onChange={handleFieldPost} value={fieldPost.body}></textarea>

                            <button onClick={handleAddPost}>Adicionar</button>
                        </fieldset>

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