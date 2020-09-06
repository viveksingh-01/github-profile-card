import numeral from 'numeral';
import React from 'react';
import './UserStats.css';

const UserStats = ({
  userStats
}: {
  userStats: {
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
  };
}) => {
  const { public_repos, followers, following, html_url } = userStats;
  const repos_url = `${html_url}/?tab=repositories`;
  const followers_url = `${html_url}/?tab=followers`;
  const following_url = `${html_url}/?tab=following`;

  const getNumeralFormat = (num: number): string => {
    let format = '0.0a';
    if (num < 1000) {
      format = '0a';
    }
    return format;
  };

  return (
    <div className="user-stats">
      <div className="text-center">
        <a href={repos_url} className="user--profile__link" target="_blank" rel="noopener noreferrer">
          <h5 className="stats__number">{numeral(public_repos).format(getNumeralFormat(public_repos))}</h5>
          <p className="stats__text">Repositories</p>
        </a>
      </div>
      <div className="text-center">
        <a href={followers_url} className="user--profile__link" target="_blank" rel="noopener noreferrer">
          <h5 className="stats__number">{numeral(followers).format(getNumeralFormat(followers))}</h5>
          <p className="stats__text">Followers</p>
        </a>
      </div>
      <div className="text-center">
        <a href={following_url} className="user--profile__link" target="_blank" rel="noopener noreferrer">
          <h5 className="stats__number">{numeral(following).format(getNumeralFormat(following))}</h5>
          <p className="stats__text">Following</p>
        </a>
      </div>
    </div>
  );
};

export default UserStats;
