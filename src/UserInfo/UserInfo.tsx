import React from 'react';
import './UserInfo.css';

const UserInfo = ({ userData }: { userData: any }) => {
  return (
    <div className="user-info">
      <div className="user-avatar">
        <img className="user-avatar__img" src={userData?.avatar_url} alt="" />
      </div>
      <div className="user-info__text">
        <h4 className="user-info__name">{userData?.name}</h4>
        <h6 className="user-info__location">{userData?.location}</h6>
        {userData?.company && <h5 className="user-info__company">{userData?.company}</h5>}
        {userData?.bio && <p className="text-muted user-info__bio">"{userData?.bio}"</p>}
      </div>
    </div>
  );
};

export default UserInfo;
