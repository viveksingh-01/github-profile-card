import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import UserInfo from '../UserInfo/UserInfo';
import UserStats from '../UserStats/UserStats';
import './ProfileCard.css';

const ProfileCard = () => {
  const [userInfo, setUserInfo] = useState();
  const [userStats, setUserStats] = useState();
  useEffect(() => {
    const username = 'viveksingh-01';
    fetchUserData(username);
  }, []);

  const fetchUserData = async (username: string): Promise<any> => {
    const URL = 'https://api.github.com/users';
    try {
      const {
        data: { name, login, location, bio, company, public_repos, followers, following, avatar_url, html_url }
      } = await axios.get(`${URL}/${username}`);
      setUserInfo({
        name,
        location,
        bio,
        company,
        avatar_url,
        html_url,
        login
      });
      setUserStats({
        public_repos,
        followers,
        following,
        html_url
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SearchBox fetchUserData={fetchUserData} />
      <section className="card">
        {userInfo && <UserInfo userInfo={userInfo} />}
        {userStats && <UserStats userStats={userStats} />}
      </section>
    </div>
  );
};

export default ProfileCard;
