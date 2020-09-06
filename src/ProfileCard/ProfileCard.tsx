import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import UserInfo from '../UserInfo/UserInfo';
import UserStats from '../UserStats/UserStats';
import './ProfileCard.css';

const ProfileCard = () => {
  const [userInfo, setUserInfo] = useState();
  const [userStats, setUserStats] = useState();
  const [error, setError] = useState(false);
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
      setError(false);
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };

  return (
    <div>
      <SearchBox fetchUserData={fetchUserData} />
      {error ? (
        <div className="card__container error--card">
          <h3 className="error__heading">Oops!</h3>
          <p className="error__text">Sorry, we couldn't get the details for the user you're looking for...</p>
        </div>
      ) : (
        <section className="card__container profile--card">
          {userInfo && <UserInfo userInfo={userInfo} />}
          {userStats && <UserStats userStats={userStats} />}
        </section>
      )}
    </div>
  );
};

export default ProfileCard;
