import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

	let addPost = () => {
		props.addPost();
  };

  let postsElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} likeCount={p.likesCount} />
  ));

  let onPostChange = (e) => {
	  let postValue = e.target.value;
	  props.onPostChange(postValue);
  };

  return (
    <div>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={props.postChange.postValue}
          />
        </div>
        <div>
          <button onClick={addPost}>Добавьте пост</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
