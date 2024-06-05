

import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButtons'
import { TimeAgo } from './TimeAgo'

import { selectPostById } from './postsSlice'


export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

    const post = useSelector(state => selectPostById(state, postId)) //if we have the right post object in the store, useSelector will return that
        
    
    //state.posts is an array of all post objects, so we can use Array.find() 


  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className='button'>Edit post</Link>
        <PostAuthor userId={post.userId}/>
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post}/>

      </article>
    </section>
  )
}