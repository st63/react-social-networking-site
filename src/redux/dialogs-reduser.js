const ADD_MESSAGE = "ADD-MESSAGE";
const ON_CHANGE_MESSAGE = "ON-CHANGE-MESSAGE";

const dialogsReduser = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messages.length + 1,
        message: state.messageChange.messageValue,
      };
      state.messages.push(newMessage);
      state.messageChange.messageValue = "";
      return state;
    case ON_CHANGE_MESSAGE:
      state.messageChange.messageValue = action.value;
		return state;
	  default:
		return state;
	}
};

export const addMessageActionCreator = () => ({
	type: ADD_MESSAGE,
 });
 
 export const onChangeMessageActionCreator = (text) => ({
	type: ON_CHANGE_MESSAGE,
	value: text,
 });
  

export default dialogsReduser;
