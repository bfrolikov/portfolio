import React from 'react';
import { Grid, Segment, Card, Image, List, Divider } from 'semantic-ui-react';
import cpp from '../images/cpp.jpg'
import as from '../images/as.jpg'
import reactImage from '../images/react.jpg'
import node from '../images/node.jpg'
import mongo from '../images/mongo.jpg'
import semantic from '../images/semantic.png'
import firebase from '../images/firebase.jpg'
const ExperienceSegment = () => (
  <Segment vertical style={{ paddingLeft: '3%', paddingTop: 30, background: 'rgba(122,122,122,0.1)', height: 900 }}>
    <Grid relaxed stackable>
      <Grid.Row columns={4}>
        <Grid.Column >
          <Card >
            <Image src={cpp} />
            <Card.Content>
              <Card.Header>C++</Card.Header>
              <Card.Description>
                Experience: 5 years
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column >
          <Card >
            <Image src={as} />
            <Card.Content>
              <Card.Header>Android Studio</Card.Header>
              <Card.Description>
                Experience: 2 years
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column >
          <Card >
            <Image src={firebase} />
            <Card.Content>
              <Card.Header>Google Firebase</Card.Header>
              <Card.Description>
                Experience: 2 years
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row >
      <Grid.Row columns={4}>
        <Grid.Column >
          <Card >
            <Image src={mongo} />
            <Card.Content>
              <Card.Header>MongoDB</Card.Header>
              <Card.Description>
                Experience: less than a year
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column >
        <Grid.Column >
          <Card >
            <Image src={node} />
            <Card.Content>
              <Card.Header>Node.js</Card.Header>
              <Card.Description>
                Experience: less than a year
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column >
          <Card >
            <Image src={reactImage}  />
            <Card.Content>
              <Card.Header>React</Card.Header>
              <Card.Description>
                Experience: less than a year
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column >
        <Grid.Column>
          <Card >
            <Image src={semantic}  />
            <Card.Content>
              <Card.Header>Semantic UI React</Card.Header>
              <Card.Description>
                Experience: less than a year
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>

      </Grid.Row>
    </Grid>
  </Segment>
);

export default ExperienceSegment;
