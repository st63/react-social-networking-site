import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "./../../../redux/profile-reduser";

const MyPosts = (props) => {
  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let postsElements = state.posts.map((p) => (
    <Post id={p.id} message={p.message} likeCount={p.likesCount} />
  ));

  let onPostChange = (e) => {
    let postValue = e.target.value;
    props.dispatch(onPostChangeActionCreator(postValue));
  };

  return (
    <div>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={state.postChange.postValue}
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
