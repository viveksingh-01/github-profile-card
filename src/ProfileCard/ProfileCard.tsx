import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

  return (
    <div className="card">
      <div className="card__user-info"></div>
      <div className="card__user-stats"></div>
    </div>
  );
};

export default ProfileCard;
