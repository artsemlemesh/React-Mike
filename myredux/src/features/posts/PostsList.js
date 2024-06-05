
import { Spinner } from '../../components/Spinner'

import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButtons'
import { TimeAgo } from './TimeAgo'
import { selectAllPosts, fetchPosts } from './postsSlice'
import { useEffect } from 'react'



const PostExcerpt = ({post}) => {
    return (
        <article className='post-excerpt'>
            <h3>{post.title}</h3>
            <div>
                <PostAuthor userId={post.user}/>
                <TimeAgo timestamp={post.date}/>
            </div>
            <p className='post-content'>{post.content.substring(0, 100)}</p>
            <ReactionButtons post={post}/>
            <Link to={`/posts/${post.id}`} className='button muted-button'>
                View Post
            </Link>
        </article>
    )
}



export const PostsList = () => {//is trying to read posts from state.posts, assuming that field is an array
    const dispatch = useDispatch()//dispatch actions
    const posts = useSelector(selectAllPosts) //retrieve all posts from Redux store via selectAllPosts selector
    
    const postStatus = useSelector(state=> state.posts.status)//retrieves current status of the post fetching process
    const error = useSelector(state=> state.posts.error)

    useEffect(()=> {//when idle dispatches fetchPosts, this ensures posts are fetched only when necessary, such as on component mount or when the post status resets to idle
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    let content//to store JSX based on the post fetch status
    if(postStatus === 'loading'){//spinner if loading
        content = <Spinner text='Loading...'/>
    } else if (postStatus === 'succeeded'){//copies(slice) and sorts posts array in descending order
        const orderedPosts = posts
        .slice()//state immutability must be maintained, so we copy the array
        .sort((a, b) => b.date.localeCompare(a.date))

        content = orderedPosts.map(post => (
            <PostExcerpt key={post.id} post={post}/>
        ))
    } else if (postStatus === 'failed') {//displays error if failed
        content = <div>{error}</div>
    }



    return (
        <section className='posts-list'>
            <h2>Posts</h2>
            {content}
        </section>
    )
}