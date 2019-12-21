import React from 'react';
import { Header, Card, Image, Grid, Segment } from 'semantic-ui-react';
//import './App.css';
import ava from './images/ava.jpg';

const App = () => {
  const rectangleStyle = {
    //width: '100%',
    background: 'rgba(122, 122, 122,0.1)'
  }
  return (
    <div>
      <Segment vertical inverted>
        <Grid divided>
          <Grid.Column width={3}>
            <Card>
              <Image src={ava} size="large"/>
            </Card>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted>
              Hi! My name is Boris Frolikov
            </Header>
            <p></p>
          </Grid.Column>
        </Grid>
    </Segment>
    </div>
  );
};

export default App;
