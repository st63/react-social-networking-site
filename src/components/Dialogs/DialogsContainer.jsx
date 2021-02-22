import React from "react";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  onChangeMessageActionCreator,
} from "./../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		messageChange: state.dialogsPage.messageChange,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => { dispatch(addMessageActionCreator()) },
		onChangeMessage: (text) => {dispatch(onChangeMessageActionCreator(text))}

	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect,
)(Dialogs);
