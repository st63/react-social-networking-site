import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userUndef from '../../../images/userUndef.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return (
		<Preloader />
	)
}

  return (
    <div>
      {/*<div>
        <img src="https://im0-tub-ru.yandex.net/i?id=4406ba018a69cd67558a7a14c02855ca-l&n=13" />
		</div>*/}
		  <img className={s.imgLarge} src={props.profile.photos.large !== null ? props.profile.photos.large : userUndef} alt="" />
		  <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
		  <div>Имя: {props.profile.fullName}</div>
		  <div>Status: {props.profile.aboutMe}</div>
    </div>
  );
};

export default ProfileInfo;
