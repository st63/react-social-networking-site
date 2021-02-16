import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  followAC,
  setUsersAC,
  unfollowAC,
  setCurrentPageAC,
  totalUsersCountAC,
} from "./../../redux/users-reduser";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    totalUsersCount: (usersCount) => {
      dispatch(totalUsersCountAC(usersCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
