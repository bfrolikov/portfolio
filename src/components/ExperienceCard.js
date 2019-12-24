import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ExperienceCard = ({ name, desc, src }) => (
  <Card style={{ marginLeft: 'auto', marginRight: 'auto' }} raised>
    <Image src={src} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>
        {desc}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default ExperienceCard;