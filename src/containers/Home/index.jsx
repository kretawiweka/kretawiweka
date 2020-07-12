import React from 'react';

import Profile from '../../components/profile';
import SocialMedia from '../../components/social-media';
import Career from '../../components/career';
import Article from '../../components/article';
import './style.scss';

const Home = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="section row">
          <div className="item-section">
            <Profile />
          </div>
          <div className="item-section">
            <SocialMedia />
          </div>
        </div>
        <div className="section row">
          <div className="item-section flex-1">
            <Career />
          </div>
          <div className="item-section flex-1">
            <Article />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
