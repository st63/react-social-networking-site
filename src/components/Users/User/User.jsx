import React from "react";
import s from "./User.module.css";
import userUndef from "./../../../images/userUndef.png";
import { NavLink } from "react-router-dom";

const User = (props) => {
  return props.users.map((u) => (
    <div key={u.id}>
      <div className={s.all__wrap}>
        <div>
          <div>
            <NavLink to={`/profile/${u.id}`}>
              <img
                className={s.img}
                src={u.photos.small !== null ? u.photos.small : userUndef}
                alt=""
              />
            </NavLink>
          </div>
          {u.followed ? (
            <button
              disabled={props.followingInProgress.some((id) => id === u.id)}
              onClick={() => {
					props.unfollow(u.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
				disabled={props.followingInProgress.some((id) => id === u.id)}
							  onClick={() => {
								  props.follow(u.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
        <div className={s.wrap}>
          <div className={s.min__wrap}>
            <div>{u.name}</div>
            <div>{"u.location.country"}</div>
          </div>
          <div className={s.min__wrap}>
            <div>{u.status}</div>
            <div>{"u.location.city"}</div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default User;
