import LoginForm from "../features/auth/LoginForm";
import { AddPostForm } from "../features/posts/AddPostForm";
import PostsList from "../features/posts/PostList";

const About = () => {
  return (
    <div>
      <AddPostForm/>
      <PostsList/>
    <LoginForm/>

    </div>
)
};

export default About;
