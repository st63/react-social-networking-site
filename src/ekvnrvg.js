let rerenderEntireTree = () => {
	console.log('Стэйт поменялся')
}

export let state = {
  profilePage: {
    posts: [
      { id: "1", message: "Hi, how are you", likesCount: "15" },
      { id: "2", message: "It is Stas", likesCount: "20" },
      { id: "1", message: "Hi, how are you", likesCount: "15" },
      { id: "2", message: "It is Stas", likesCount: "20" },
      { id: "1", message: "Hi, how are you", likesCount: "15" },
      { id: "2", message: "It is Stas", likesCount: "20" },
      { id: "1", message: "Hi, how are you", likesCount: "15" },
      { id: "2", message: "It is Stas", likesCount: "20" },
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
      { who: "other", id: 1, message: "Hi, how are your?" },
      { who: "i", id: 2, message: "Hi, it is me" },
      { who: "other", id: 1, message: "Hi, how are your?" },
      { who: "i", id: 2, message: "Hi, it is me" },
      { who: "other", id: 1, message: "Hi, how are your?" },
      { who: "i", id: 2, message: "Hi, it is me" },
	  ],
	  messageChange: {
      messageValue: "",
    },
  },
};

export const addMessage = () => {
	let newMessage = { who: "i", id: 3, message: state.dialogsPage.messageChange.messageValue };
	state.dialogsPage.messages.push(newMessage);
	state.dialogsPage.messageChange.messageValue = '';
	rerenderEntireTree(state);
};
 
export const onChangeMessage = (value) => {
	state.dialogsPage.messageChange.messageValue = value;
	rerenderEntireTree(state);
 };

export const addPost = () => {
  let newPost = { id: "5", message: state.profilePage.postChange.postValue, likesCount: "30" };
	state.profilePage.posts.push(newPost);
	state.profilePage.postChange.postValue = '';
	rerenderEntireTree(state);
};

export const onPostChange = (value) => {
  state.profilePage.postChange.postValue = value;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
}