import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div>
          <h4 className="user-info__name">{name}</h4>
          <h6 className="user-info__location">
            <FontAwesomeIcon icon={faMapMarkerAlt} size={'1x'} className="mr-2" />
            {location}
          </h6>
        </div>
        {company && (
          <h6 className="user-info__company">
            <FontAwesomeIcon icon={faBuilding} size={'1x'} className="mr-2" />
            {company}
          </h6>
        )}
        {bio && (
          <div className="bio__container">
            <FontAwesomeIcon icon={faQuoteLeft} className="mr-2 bio__quotes" />
            <p className="text-muted user-info__bio">{bio}</p>
            <FontAwesomeIcon icon={faQuoteRight} className="ml-2 bio__quotes" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
