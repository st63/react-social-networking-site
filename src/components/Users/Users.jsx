import React from "react";
import User from "./User/User";
import s from "./Users.module.css";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              id={p}
              onClick={(e) => {
                props.onChangePage(p);
              }}
              className={props.currentPage === p && s.selectedPage}
            >
              {p}
            </span>
          );
        })}
      </div>
      <User
        users={props.users}
        followingInProgress={props.followingInProgress}
        follow={props.follow}
        unfollow={props.unfollow}
      />
      ;
    </div>
  );
};

export default Users;
