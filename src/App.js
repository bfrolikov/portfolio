import React from 'react';
import { useState } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import { Menu, Segment, Container } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
 
const App = () => {
  const mobile = (window.innerWidth <= 700 ? true : false);
  const [activeMenuElement, setActiveMenuElement] = useState('0');
  console.log(window.innerWidth);

  return (
    <div>
      <Router>
        <Segment inverted vertical style={{ paddingTop: 25,paddingBottom:35, margin: 0 }}>
          <Container>
            <Menu inverted secondary style={{ fontSize: '1.25em' }}>
              <Menu.Item
                active={activeMenuElement === '0'}
                as={Link}
                to="/"
                onClick={() => { setActiveMenuElement('0'); }} >About me</Menu.Item>
              <Menu.Item
                active={activeMenuElement === '1'}
                as={Link}
                to="/projects"
                onClick={() => { setActiveMenuElement('1'); }}
                name="My Projects" />
            </Menu>
          </Container>
        </Segment>
        <Route exact path="/" render={() => <Home mobile={mobile} />} />
        <Route exact path="/projects" render={() => <Projects mobile={mobile} />} />
      </Router>

    </div>
  );
};

export default App;
