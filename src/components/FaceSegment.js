import React from 'react';
import { Header, Card, Image, Grid, Segment } from 'semantic-ui-react';
import ava from '../images/ava.jpg';

const FaceSegment = ()=>(
  <Segment vertical inverted style={{ padding: '120px 0 120px 90px', height: 600 }}>
  <Grid divided style={{ maxWidth: 1200 }}>
    <Grid.Column width={5}>
      <Card style={{ minWidth: 340 }}>
        <Image src={ava} />
      </Card>
    </Grid.Column>
    <Grid.Column width={5} style={{ marginTop: 35 }}>
      <Header inverted as="h2">
        Hi! My name is Boris Frolikov
      </Header>
      <p style={{ fontSize: '1.7em' ,marginTop:25}}>I'm an Android, system and beginner full stack programmer</p>
    </Grid.Column>
  </Grid>
</Segment> 
)
export default FaceSegment;