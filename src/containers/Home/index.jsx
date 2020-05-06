import React from 'react';
import Header from '../../components/Header';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import './style.scss';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Card>
          <div className="content">
            <h1 className="text-title">Well Hello!</h1>
            <h1 className="text-title">My name is Kretawiweka</h1>
            <h1 className="text-title">
              {"I'm a "}
              <span className="brand">Software Engineer</span>
            </h1>
          </div>
          <div className="content--flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              href="https://www.linkedin.com/in/kretawiweka"
            >
              <Button>linkedin</Button>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              href="http://github.com/kretawiweka"
            >
              <Button>github</Button>
            </a>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Home;
