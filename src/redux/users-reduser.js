const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT";

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 20,
	currentPage: 1
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users
		  };
	  case SET_CURRENT_PAGE:
		  return {
			  ...state,
			  currentPage: action.currentPage,
		  };
	  case TOTAL_USERS_COUNT:
		  return {
			  ...state,
			  totalUsersCount: action.usersCount,
		  };
    default:
      return state;
  }
};

export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPageAC = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage,
});

export const totalUsersCountAC = (usersCount) => ({
	type: TOTAL_USERS_COUNT,
	usersCount,
});

export default usersReduser;
