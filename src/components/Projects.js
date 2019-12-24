import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import ProjectSegment from './ProjectSegment';
import androidApp from '../projectObjects/androidApp'
import website from '../projectObjects/website';
const Projects = ({mobile}) => (
  <div>
    <Segment vertical style={{height:'auto',background: 'rgba(122,122,122,0.1)'}}>
    <Container>
    <ProjectSegment {...androidApp} mobile={mobile}></ProjectSegment>
    <ProjectSegment {...website} mobile={mobile}></ProjectSegment>
    </Container>
    </Segment>
  </div>
)

export default Projects;