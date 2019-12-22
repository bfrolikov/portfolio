import React from 'react';
import ExperienceSegment from './ExperienceSegment'
import FaceSegment from './FaceSegment'

const Home = ({mobile}) => (
  <div>
    <FaceSegment mobile={mobile}/>
    <ExperienceSegment mobile={mobile}/>
  </div>
)

export default Home;