import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "./../../../redux/profile-reduser";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		postChange: state.profilePage.postChange,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => { dispatch(addPostActionCreator()) },
		onPostChange: (text) => {dispatch(onPostChangeActionCreator(text))},
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
