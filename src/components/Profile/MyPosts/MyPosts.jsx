import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from '../../Common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"post"}
          placeholder={"Введите текст"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Добавьте пост</button>
      </div>
    </form>
  );
};

const PostReduxForm = reduxForm({
  form: "post",
})(PostsForm);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.id} id={p.id} message={p.message} likeCount={p.likesCount} />
  ));

  const onSubmit = (value) => {
    props.addPost(value.post);
  };

  return (
    <div>
      <h3>my posts</h3>
      <div>
        <PostReduxForm onSubmit={onSubmit} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
