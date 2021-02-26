import React from "react";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
} from "./../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: (value) => { dispatch(addMessageActionCreator(value)) },
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	//withAuthRedirect,
)(Dialogs);
