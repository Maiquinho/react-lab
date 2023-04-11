import { useEffect, useState } from 'react';
import { Loading } from '../Loading';
import { fetchApi } from '../../api/jsonplaceholder';
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
            const json = await fetchApi.getData('posts');
            setLoading(false);
            setPosts(json);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    async function handleAddPost(title: string, body: string) {

        const json = await fetchApi.postData('posts', 1, title, body);

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