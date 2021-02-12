const ADD_POST = "ADD-POST";
const ON_POST_CHANGE = "ON-POST-CHANGE";

let initialState = {
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
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: state.postChange.postValue,
        likesCount: "30",
      };
      state.posts.push(newPost);
      state.postChange.postValue = "";
      return state;
    case ON_POST_CHANGE:
      state.postChange.postValue = action.value;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const onPostChangeActionCreator = (text) => ({
  type: ON_POST_CHANGE,
  value: text,
});

export default profileReduser;
