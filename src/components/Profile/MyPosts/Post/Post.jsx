import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://yt3.ggpht.com/a/AATXAJwiSB21aHzBxZUcMV5Z3DDgA73FB9bifA2qSNqBjw=s900-c-k-c0xffffffff-no-rj-mo"
        alt=""
      />
      {props.id} {props.message}
      <div>Like {props.likeCount} </div>
    </div>
  );
};

export default Post;
