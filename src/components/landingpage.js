import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <div className='thumbnail'>
              <img 
                src="https://media-exp1.licdn.com/dms/image/C5603AQH3ryc0BFxdGw/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=zMCF6WYVoI0fyOQk_9VONnnlXPhXjup8XpL-u_L8WNU"
                />
            </div>
            <div className="banner-text">
              <h1>Software Engineer</h1>
              
              <hr/>

              <p>Python | Django | JavaScript | React/Vue | PostgreSQL</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/rafael-fueyo-gomez/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin"  aria-hidden='true'/>
                </a>

                {/* Github */}
                <a href="https://github.com/rafugo" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github"  aria-hidden='true'/>
                </a>

                {/* Angellist */}
                <a href="https://angel.co/u/rafael-fueyo-gomez" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-angellist"  aria-hidden='true'/>
                </a>

              </div>

            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;