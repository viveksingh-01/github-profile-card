import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { SearchBox, UserInfo, UserStats } from '..';
import './ProfileCard.css';

const GITHUB_API_URL = 'https://api.github.com/users';

const ProfileCard = () => {
  const [userInfo, setUserInfo] = useState();
  const [userStats, setUserStats] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const username = 'buckyroberts';
    fetchUserData(username);
  }, []);

  const fetchUserData = async (username: string): Promise<any> => {
    if (username) {
      try {
        const {
          data: { name, login, location, bio, company, public_repos, followers, following, avatar_url, html_url }
        } = await axios.get(`${GITHUB_API_URL}/${username}`);
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
    }
  };

  return (
    <Fragment>
      <SearchBox fetchUserData={fetchUserData} />
      {error ? (
        <div className="card error--card">
          <h3 className="error__heading">Oops!</h3>
          <p className="error__text">
            {userInfo
              ? `Sorry, we couldn't get the details for the user you're looking for. Please try again...`
              : `Something went wrong. Please check your internet connection.`}
          </p>
        </div>
      ) : (
        <section className="card profile--card">
          {userInfo && <UserInfo userInfo={userInfo} />}
          {userStats && <UserStats userStats={userStats} />}
        </section>
      )}
    </Fragment>
  );
};

export default ProfileCard;
