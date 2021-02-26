import { ProfileApi } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

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
  profile: null,
  status: "",
};

const profileReduser = (state = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: action.value,
        likesCount: "30",
      };
      stateCopy = {
        ...state,
        posts: [...state.posts, newPost],
      };
      return stateCopy;

    case SET_STATUS:
      stateCopy = {
        ...state,
        status: action.status,
      };
      return stateCopy;

    case SET_USER_PROFILE:
      stateCopy = {
        ...state,
        profile: action.profile,
      };
      return stateCopy;

    default:
      return state;
  }
};

export const addPostActionCreator = (value) => ({
	type: ADD_POST,
	value,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getProfile = (userId) => {
  return (dispatch) => {
    ProfileApi.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    ProfileApi.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    ProfileApi.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReduser;
