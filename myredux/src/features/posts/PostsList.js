import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButtons'
import { TimeAgo } from './TimeAgo'

export const PostsList = () => {
    const posts = useSelector(state=> state.posts)
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))//here we sort posts, new first

    const renderedPosts = orderedPosts.map(post=> (//changed posts for orderedposts
        <article className='post-excerpt' key={post.id}>
            <h3>{post.title}</h3>
            <p className='post-content'>{post.content.substring(0, 100)}</p>
            <Link to={`/posts/${post.id}`} className='button muted-button'>
                View post
            </Link>
            <PostAuthor userId={post.user}/>
            <ReactionButtons post={post}/>
            <TimeAgo timestamp={post.date} />
        </article>
    ))

    return (
        <section className='posts-list'>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}