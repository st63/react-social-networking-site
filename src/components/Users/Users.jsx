import React from "react";
import * as axios from "axios";
import User from "./User/User";
import s from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
			this.props.setUsers(response.data.items);
			this.props.totalUsersCount(response.data.totalCount);
      });
	}

  onChangePage = (pageNumber) => {
	  this.props.setCurrentPage(pageNumber);
	  axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

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
                  this.onChangePage(p);
                }}
                className={this.props.currentPage === p && s.selectedPage}
              >
                {p}
              </span>
            );
          })}
        </div>
        <User props={this.props} />;
      </div>
    );
  }
}

export default Users;
