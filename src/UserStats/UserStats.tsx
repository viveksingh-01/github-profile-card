import numeral from 'numeral';
import React from 'react';
import './UserStats.css';

const UserStats = ({ repos, followers, following }: { repos: number; followers: number; following: number }) => {
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
        <h5 className="stats__number">{numeral(repos).format(getNumeralFormat(repos))}</h5>
        <p className="stats__text">Repositories</p>
      </div>
      <div className="text-center">
        <h5 className="stats__number">{numeral(followers).format(getNumeralFormat(followers))}</h5>
        <p className="stats__text">Followers</p>
      </div>
      <div className="text-center">
        <h5 className="stats__number">{numeral(following).format(getNumeralFormat(following))}</h5>
        <p className="stats__text">Following</p>
      </div>
    </div>
  );
};

export default UserStats;
