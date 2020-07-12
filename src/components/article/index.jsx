import React from 'react';

import Card from '../common/Card';
import './style.scss';

const Article = () => {
  return (
    <div className="article">
      <Card>
        <div className="content">
          <div className="text">
            <h3 className="title">Hi, there!</h3>
            <p className="description">
              As a software engineer, I want to pursue the whole field of
              software engineer. Even though in my Article I have been focusing
              more on the frontend engineer, but I also like to explore and
              discuss backend, infra, etc and even like to discuss business and
              design.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Article;
