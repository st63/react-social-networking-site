import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";

export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hi, how are you", likesCount: "15" },
        { id: "2", message: "It is Stas", likesCount: "20" },
        { id: "3", message: "Hi, how are you", likesCount: "15" },
        { id: "4", message: "It is Stas", likesCount: "20" },
        { id: "5", message: "Hi, how are you", likesCount: "15" },
        { id: "6", message: "It is Stas", likesCount: "20" },
        { id: "7", message: "Hi, how are you", likesCount: "15" },
        { id: "8", message: "It is Stas", likesCount: "20" },
      ],
      postChange: {
        postValue: "",
      },
    },
    dialogsPage: {
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
    },
  },
  _callSubscriber() {
    console.log("Стэйт поменялся");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
	this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
	  this._state.profilePage = profileReduser(this._state.profilePage, action);
	  this._callSubscriber(this._state);
  },
};



