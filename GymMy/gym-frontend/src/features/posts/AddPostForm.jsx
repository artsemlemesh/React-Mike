import { useState } from "react";
import { useDispatch } from "react-redux";

import { postAdded, postUpdated, addNewPost } from "./postsSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const dispatch = useDispatch();
  const cannSave =
    [title, content].every(Boolean) && addRequestStatus === "idle";

  const onSavePostClicked = async () => {
    if (cannSave) {
      try {
        setAddRequestStatus("pending");
        await dispatch(addNewPost({ title, content })).unwrap();
        setTitle("");
        setContent("");
      } catch (err) {
        console.error("failed to save the post: ", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  return (
    <section>
      <h2>Add new post</h2>
      <form>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent"> Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!cannSave}>
          Save post
        </button>
      </form>
    </section>
  );
};
