import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserStats from '../UserStats/UserStats';
import './ProfileCard.css';

const ProfileCard = () => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const username = 'buckyroberts';
    fetchUserData(username);
  }, []);

  const fetchUserData = async (username: string): Promise<any> => {
    const URL = 'https://api.github.com/users';
    try {
      const {
        data: {
          name,
          location,
          bio,
          company,
          public_repos,
          followers,
          following,
          avatar_url,
          html_url,
          repos_url,
          followers_url,
          following_url
        }
      } = await axios.get(`${URL}/${username}`);
      setUserInfo({
        name,
        location,
        bio,
        company,
        public_repos,
        followers,
        following,
        avatar_url,
        html_url,
        repos_url,
        followers_url,
        following_url
      });
    } catch (error) {
      console.log(error);
    }
  };

  return userInfo ? (
    <div className="card">
      <div className="card__user-info">
        <div className="user-avatar">
          <img className="user-avatar__img" src={userInfo?.avatar_url} alt="" />
        </div>
        <div className="user-info__text">
          <h4 className="user-info__name">{userInfo?.name}</h4>
          <h6 className="user-info__location">{userInfo?.location}</h6>
          {userInfo?.company && <h5 className="user-info__company">{userInfo?.company}</h5>}
          {userInfo?.bio && <p className="text-muted user-info__bio">"{userInfo?.bio}"</p>}
        </div>
      </div>
      <UserStats repos={userInfo.public_repos} followers={userInfo.followers} following={userInfo.following} />
    </div>
  ) : null;
};

export default ProfileCard;
