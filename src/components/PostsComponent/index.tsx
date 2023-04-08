import { ChangeEvent, InputHTMLAttributes, TextareaHTMLAttributes, useEffect, useState } from 'react';
import { Loading } from '../Loading';
import { PostComponent } from '../PostComponent';
import './styles.css';
import { Post } from '../../types/Post';


export function PostsComponent() {
    const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);
    const [fieldPost, setFieldPost] = useState({ title: '', body: '' });

    useEffect(() => {
        handlePosts();
    }, [posts])

    async function handlePosts() {
        try {
            const response = await fetch(POSTS_ENDPOINT);
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

    async function handleAddPost() {

        if (fieldPost.title !== '' && fieldPost.body !== '') {

            const response = await fetch(POSTS_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    userId: 1,
                    title: fieldPost.body,
                    body: fieldPost.body
                })
            });
            const json = await response.json();
            
            if(json.id){
                alert(`Post ${json.id} adicionado com sucesso`);

                setPosts(prevPosts => {
                    return [...prevPosts, json]
                })

            }else{
                alert('Ocorreu algum erro, tente mais tarde!')
            }

        } else {
            alert('Preencha os campos corretamente!');
        }
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