import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButtons'
import { TimeAgo } from './TimeAgo'
import { selectAllPosts } from './postsSlice'


export const PostsList = () => {//is trying to read posts from state.posts, assuming that field is an array
    
    const posts = useSelector(selectAllPosts) //before = state=> state.posts
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))//here we sort posts, new first

    const renderedPosts = orderedPosts.map(post=> (//changed posts for orderedposts
        <article className='post-excerpt' key={post.id}>
            <h3>{post.title}</h3>
            <p className='post-content'>{post.content.substring(0, 100)}</p>
            <Link to={`/posts/${post.id}`} className='button muted-button'>
                View post
            </Link>
            <ReactionButtons post={post}/>
            <PostAuthor userId={post.user}/>

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