import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2 style={{fontSize: '45px'}}>Rafael Fueyo-Gomez</h2>
            <img 
                src="https://media-exp1.licdn.com/dms/image/C5603AQH3ryc0BFxdGw/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=zMCF6WYVoI0fyOQk_9VONnnlXPhXjup8XpL-u_L8WNU"
                alt="thumbnail"
                style={{height:'250px'}}
                />
            
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>fillerfillerfillerfillerfillerfiller
              fillerfillerfillerfillerfillerfillerfiller
              fillerfillerfillerfillerfillerfillerfiller
              fillerfillerfillerfillerfillerfiller
              </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Muli'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    713dash598dash9828
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon="person">
                    name
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon="person">
                    name
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
            
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;