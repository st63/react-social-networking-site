import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
} from "./../../../redux/profile-reduser";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: (value) => { dispatch(addPostActionCreator(value)) },
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
