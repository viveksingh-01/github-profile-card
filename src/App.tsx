import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProfileCard from './ProfileCard/ProfileCard';

const App = () => {
  return (
    <section className="profile-card__container">
      <ProfileCard />
    </section>
  );
};

export default App;
