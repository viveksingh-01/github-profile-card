import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ProfileCard } from './components';

const App = () => {
  return (
    <section className="app">
      <ProfileCard />
    </section>
  );
};

export default App;
