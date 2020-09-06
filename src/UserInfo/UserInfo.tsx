import React from 'react';
import './UserInfo.css';

const UserInfo = ({
  userInfo
}: {
  userInfo: { name: string; avatar_url: string; location: string; company: string; bio: string };
}) => {
  const { name, avatar_url, location, company, bio } = userInfo;
  return (
    <div className="user-info">
      <div className="user-avatar">
        <img className="user-avatar__img" src={avatar_url} alt="" />
      </div>
      <div className="user-info__text">
        <h4 className="user-info__name">{name}</h4>
        <h6 className="user-info__location">{location}</h6>
        {company && <h5 className="user-info__company">{company}</h5>}
        {bio && <p className="text-muted user-info__bio">"{bio}"</p>}
      </div>
    </div>
  );
};

export default UserInfo;
