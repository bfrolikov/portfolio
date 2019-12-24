import React from 'react';
import { Header, Card, Image, Grid, Segment, Container } from 'semantic-ui-react';
import ava from '../images/ava.jpg';


const FaceSegment = ({ mobile }) => {
  const segmentStyle = {
    paddingBottom:120,
    height: 'auto'
  }
  return (
    <Segment vertical inverted style={segmentStyle}>
      <Container>
        <Grid stackable columns='equal' style={{ maxWidth: 900 }}>
          <Grid.Column width={7}>
            <Card style={{ minWidth: 330, marginLeft:'auto',marginRight:'auto'}}>
              <Image src={ava} />
            </Card>
          </Grid.Column>
          <Grid.Column width={7} style={{ marginTop: 35 ,marginLeft:40}} textAlign={mobile?'center':'left'}>
  
            <Header inverted as="h1">
              Hi! My name is Boris Frolikov
            </Header>
            <p style={{ fontSize: '1.8em', marginTop: 25 }}>I'm an Android, system and beginner full stack programmer</p>
            
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
}
export default FaceSegment;