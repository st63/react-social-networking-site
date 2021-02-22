import { ProfileApi } from '../api/api';

const ADD_POST = "ADD-POST";
const ON_POST_CHANGE = "ON-POST-CHANGE";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
  profile: null
};

const profileReduser = (state = initialState, action) => {

	let stateCopy;

  switch (action.type) {
    case ADD_POST: 
      let newPost = {
        id: state.posts.length + 1,
        message: state.postChange.postValue,
        likesCount: "30",
      };
		  stateCopy = {
			  ...state,
			  posts: [...state.posts, newPost],
			  postChange: { ...state.postChange },
		  };
      stateCopy.postChange.postValue = "";
      return stateCopy;
    
    case ON_POST_CHANGE: 
      stateCopy = {
			...state,
			postChange: { ...state.postChange },
		};
      stateCopy.postChange.postValue = action.value;
		  return stateCopy;
	  
	  case SET_USER_PROFILE:
		  stateCopy = {
			  ...state,
			  profile: action.profile
		  };
		  return stateCopy;
    
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

export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
});
 
export const getProfile = (userId) => {
	return (dispatch) => {
		ProfileApi.getProfile(userId)
      .then((response) => {
        dispatch(setUserProfile(response.data));
      });
	}
}

export default profileReduser;
