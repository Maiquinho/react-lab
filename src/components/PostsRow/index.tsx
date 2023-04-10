import { PostComponent } from '../PostComponent';
import { Posts } from "../../types/Post";

export function PostsRow({posts}: Posts) {

    return (
        <>
            {posts.length > 0 ? (

                <article className="posts-article">
                    <div className="posts-article__title">
                        <h2>Posts</h2>
                        <small>Total: {posts.length}</small>
                    </div>

                    {posts.map(({...post}, i) => <PostComponent key={i} {...post} />)}
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