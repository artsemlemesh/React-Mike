import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { Navbar } from './app/Navbar'
import { EditPostForm } from './features/posts/EditPostForm'


import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path='/posts/:postId' component={SinglePostPage}/>
          <Route exact path="/editPost/:postId" component={EditPostForm} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
