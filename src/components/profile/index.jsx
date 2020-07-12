import React from 'react';
import imageProfile from './profil-img.jpg';

import Card from '../common/Card';
import './style.scss';

const Profile = () => {
  return (
    <div className="profile">
      <Card>
        <div className="content">
          <img className="profile-img" src={imageProfile} alt="profil-img" />
          <div className="text">
            <h3 className="title">Hi, there!</h3>
            <p className="description">
              As a software engineer, I want to pursue the whole field of
              software engineer. Even though in my career I have been focusing
              more on the frontend engineering, but I also like to explore and
              discuss whole field of software engineering and even like to
              discuss about business and design.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
