import { useEffect, useState } from 'react';
import { Loading } from '../Loading';
import { POSTS_ENDPOINT } from '../../api/jsonplaceholder';
import { Post } from '../../types/Post';
import { PostsRow } from '../PostsRow';
import { AddPost } from '../AddPost';

import './styles.css';


export function PostsComponent() {

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);


    useEffect(() => {
        handlePosts();
    }, []);


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

    async function handleAddPost(title: string, body: string) {

        const response = await fetch(POSTS_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                userId: 1,
                title: title,
                body: body
            })
        });
        const json = await response.json();

        if (json.id) {
            alert(`Post ${json.id} adicionado com sucesso`);

        } else {
            alert('Ocorreu algum erro, tente mais tarde!')
        }

    }


    return (
        <>
            {loading ? <Loading /> :

                (
                    <>
                        <AddPost onAdd={handleAddPost} />
                        <PostsRow posts={posts} />
                    </>
                )

            }
        </>
    )
}