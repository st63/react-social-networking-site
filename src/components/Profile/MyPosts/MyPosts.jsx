import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Button, TextField } from "@material-ui/core";

const MyPosts = (props) => {
  let addPost = () => {
    props.addPost();
  };

  let postsElements = props.posts.map((p) => (
    <Post key={p.id} id={p.id} message={p.message} likeCount={p.likesCount} />
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
          <TextField
            label="Введите текст"
            id="mui-theme-provider-standard-input"
            variant="outlined"
            onChange={onPostChange}
            value={props.postChange.postValue}
          />
        </div>
        <div>
          <Button variant="contained" color="secondary" onClick={addPost}>
            Добавьте пост
          </Button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
