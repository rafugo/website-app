import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

function App() {
  return (
    <div className="demo-big-content">
    <Helmet>
      <title>Rafael Fueyo-Gomez</title>
    </Helmet>
    <Layout>
      <Header className="header-color" title="Rafael Fueyo-Gomez" scroll>
          <Navigation className="header-navigation">
              <Link to="/">
                <h4 className="header-link-text">Home</h4>
              </Link>
              <Link to="/resume">
                <h4 className="header-link-text">Resume</h4>
              </Link>
              {/* <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link> */}
          </Navigation>
      </Header>
      <Drawer>
          <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
          </Navigation>
      </Drawer>
      <Content>
          <div className="page-content" />
          <Main/>
      </Content>
    </Layout>
    </div>
  );
}

export default App;
