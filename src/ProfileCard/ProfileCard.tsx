import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserInfo from '../UserInfo/UserInfo';
import UserStats from '../UserStats/UserStats';
import './ProfileCard.css';

const ProfileCard = () => {
  const [userData, setUserData] = useState();
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
      setUserData({
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

  return userData ? (
    <div className="card">
      <UserInfo userData={userData} />
      <UserStats repos={userData.public_repos} followers={userData.followers} following={userData.following} />
    </div>
  ) : null;
};

export default ProfileCard;
