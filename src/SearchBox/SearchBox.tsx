import React, { FormEvent, useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ fetchUserData }: { fetchUserData: any }) => {
  const [username, setUsername] = useState('');

  const handleSubmission = (e: FormEvent) => {
    e.preventDefault();
    fetchUserData(username);
    setUsername('');
  };

  return (
    <div className="search-box__container">
      <form onSubmit={handleSubmission}>
        <input
          type="text"
          className="form-control search-box__input"
          placeholder="Enter username + press Enter"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBox;
