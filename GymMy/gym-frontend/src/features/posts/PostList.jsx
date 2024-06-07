import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../../components/Spinner";
// import { fetchPosts } from "./postsSlice";
import {fetchPosts} from './postsSlice'

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content; //store JSX based on the post fetch status

  if (postStatus === "loading") {
    content = <Spinner text="Loading..." />;
  } else if (postStatus === "succeeded") {
    // const orderedPosts = posts
    // .slice()
    // .sort((a, b) => b.date.localeCompare(a.date))
    content = posts.map((post, index) => (
      <article key={index}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <img src={post.image}/>
      </article>
    ));
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }
// console.log(content, 'content')
  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
