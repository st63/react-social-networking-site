const ADD_MESSAGE = "ADD-MESSAGE";
const ON_CHANGE_MESSAGE = "ON-CHANGE-MESSAGE";

let initialState = {
	dialogs: [
		{
		  ava:
			 "https://yt3.ggpht.com/a/AATXAJwiSB21aHzBxZUcMV5Z3DDgA73FB9bifA2qSNqBjw=s900-c-k-c0xffffffff-no-rj-mo",
		  id: "1",
		  name: "Andrey",
		},
		{
		  ava:
			 "https://yt3.ggpht.com/a/AATXAJwiSB21aHzBxZUcMV5Z3DDgA73FB9bifA2qSNqBjw=s900-c-k-c0xffffffff-no-rj-mo",
		  id: "2",
		  name: "Renat",
		},
		{
		  ava:
			 "https://yt3.ggpht.com/a/AATXAJwiSB21aHzBxZUcMV5Z3DDgA73FB9bifA2qSNqBjw=s900-c-k-c0xffffffff-no-rj-mo",
		  id: "3",
		  name: "Leha",
		},
		{
		  ava:
			 "https://yt3.ggpht.com/a/AATXAJwiSB21aHzBxZUcMV5Z3DDgA73FB9bifA2qSNqBjw=s900-c-k-c0xffffffff-no-rj-mo",
		  id: "4",
		  name: "Valya",
		},
		{
		  ava:
			 "https://yt3.ggpht.com/a/AATXAJwiSB21aHzBxZUcMV5Z3DDgA73FB9bifA2qSNqBjw=s900-c-k-c0xffffffff-no-rj-mo",
		  id: "5",
		  name: "Anya",
		},
		{
		  ava:
			 "https://yt3.ggpht.com/a/AATXAJwiSB21aHzBxZUcMV5Z3DDgA73FB9bifA2qSNqBjw=s900-c-k-c0xffffffff-no-rj-mo",
		  id: "6",
		  name: "Tanya",
		},
	 ],
	 messages: [
		{ id: 1, message: "Hi, how are your?" },
		{ id: 2, message: "Hi, it is me" },
		{ id: 3, message: "Hi, how are your?" },
		{ id: 4, message: "Hi, it is me" },
		{ id: 5, message: "Hi, how are your?" },
		{ id: 6, message: "Hi, it is me" },
	 ],
	 messageChange: {
		messageValue: "",
	 },
}

const dialogsReduser = (state = initialState, action) => {
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
