import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserInfo from '../UserInfo/UserInfo';
import UserStats from '../UserStats/UserStats';
import './ProfileCard.css';

const ProfileCard = () => {
  const [userInfo, setUserInfo] = useState();
  const [userStats, setUserStats] = useState();
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
        avatar_url,
        html_url
      });
      setUserStats({
        public_repos,
        followers,
        following,
        repos_url,
        followers_url,
        following_url
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      {userInfo && <UserInfo userInfo={userInfo} />}
      {userStats && <UserStats userStats={userStats} />}
    </div>
  );
};

export default ProfileCard;
