import React from 'react';
import { Header, Card, Image, Grid, Segment, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ava from '../images/ava.jpg';


const FaceSegment = ({ mobile }) => {
  const segmentStyle = {
    padding: mobile ? '50px 0 120px 0px':'50px 0 120px 90px', 
    height: 'auto'
  }
  return (
    <Segment vertical inverted style={segmentStyle}>
      <Grid stackable columns='equal' style={{ maxWidth: 800 }}>
        <Grid.Column width={8}>
          <Card style={{ minWidth: 340 }}>
            <Image src={ava} />
          </Card>
        </Grid.Column>
        <Grid.Column width={8} style={{ marginTop: 35 }}>
          <Header inverted as="h2">
            Hi! My name is Boris Frolikov
      </Header>
          <p style={{ fontSize: '1.7em', marginTop: 25 }}>I'm an Android, system and beginner full stack programmer</p>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
export default FaceSegment;