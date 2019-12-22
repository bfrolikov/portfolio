import React from 'react';
import { Grid, Segment, Card, Image, Divider, Container } from 'semantic-ui-react';
import ExperienceCard from './ExperienceCard'
import cpp from '../images/cpp.jpg'
import as from '../images/as.jpg'
import reactImage from '../images/react.jpg'
import node from '../images/node.jpg'
import mongo from '../images/mongo.jpg'
import semantic from '../images/semantic.png'
import firebase from '../images/firebase.jpg'
const ExperienceSegment = ({ mobile }) => {
  const dividerStyle = {
    fontSize: mobile ? '1.7em' : '3em',
    marginBottom: 60
  }
  return (
    <Segment vertical style={{ paddingTop: 30, background: 'rgba(122,122,122,0.1)' }}>
      <Divider horizontal style={dividerStyle}>
        Technologies that I use
    </Divider>
      <Container >
        <Grid relaxed stackable>
          <Grid.Row columns={4}>
            <Grid.Column >
              <ExperienceCard name="MongoDB"
                desc="Experience: less than a year"
                src={mongo} />
            </Grid.Column >
            <Grid.Column >
              <ExperienceCard name="Node.js"
                desc="Experience: less than a year"
                src={node} />
            </Grid.Column>
            <Grid.Column >
              <ExperienceCard name="React"
                desc="Experience: less than a year"
                src={reactImage} />
            </Grid.Column >
            <Grid.Column>
              <ExperienceCard name="Semantic UI React"
                desc="Experience: less than a year"
                src={semantic} />
            </Grid.Column>

          </Grid.Row>
          <Grid.Row columns={4}>
            <Grid.Column >
              <ExperienceCard name="C++"
                desc="Experience: 5 years"
                src={cpp} />
            </Grid.Column>
            <Grid.Column >
              <ExperienceCard name="Android Studio"
                desc="Experience: 2 years"
                src={as} />
            </Grid.Column>
            <Grid.Column >
            <ExperienceCard name="Google Firebase"
                desc="Experience: 2 years"
                src={firebase} />
            </Grid.Column>
          </Grid.Row >
        </Grid>
      </Container>
    </Segment>
  )
};

export default ExperienceSegment;
