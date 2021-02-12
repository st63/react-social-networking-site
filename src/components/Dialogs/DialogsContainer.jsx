import React from "react";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  onChangeMessageActionCreator,
} from "./../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		messageChange: state.dialogsPage.messageChange
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => { dispatch(addMessageActionCreator()) },
		onChangeMessage: (text) => {dispatch(onChangeMessageActionCreator(text))}

	}
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); 

export default DialogsContainer;
