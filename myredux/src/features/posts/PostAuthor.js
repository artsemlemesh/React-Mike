import React from 'react'
import { useSelector } from 'react-redux'
//many components can access the same data in the Redux store at the same time.
export const PostAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users.find((user) => user.id === userId),
  )

  return <span>by {author ? author.name : 'unknown author'}</span>
}
