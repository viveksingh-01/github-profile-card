import axios from 'axios';
import numeral from 'numeral';
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

  const getNumeralFormat = (num: number): string => {
    let format = '0.0a';
    if (num < 1000) {
      format = '0a';
    }
    return format;
  };

  return (
    <div className="card">
      <div className="card__user-info"></div>
      <div className="card__user-stats">
        <div className="text-center">
          <h5 className="stats__number">
            {numeral(userInfo?.public_repos).format(getNumeralFormat(userInfo?.public_repos))}
          </h5>
          <p className="stats__text">Repositories</p>
        </div>
        <div className="text-center">
          <h5 className="stats__number">
            {numeral(userInfo?.followers).format(getNumeralFormat(userInfo?.followers))}
          </h5>
          <p className="stats__text">Followers</p>
        </div>
        <div className="text-center">
          <h5 className="stats__number">
            {numeral(userInfo?.following).format(getNumeralFormat(userInfo?.following))}
          </h5>
          <p className="stats__text">Following</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
