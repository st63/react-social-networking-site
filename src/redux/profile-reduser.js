const ADD_POST = "ADD-POST";
const ON_POST_CHANGE = "ON-POST-CHANGE";

const profileReduser = (state, action) => {

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