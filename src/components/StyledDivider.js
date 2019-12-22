import React from 'react';
import { Divider } from 'semantic-ui-react';

const StyledDivider = ({ text }) => (
  <Divider horizontal style={{ fontSize: '3em', marginBottom: 60, marginLeft: '-3%' }}>
    {text}
  </Divider>
)

export default StyledDivider;