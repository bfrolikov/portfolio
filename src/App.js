import React from 'react';
import { useState } from 'react';
import Home from './components/Home';
import { Menu, Segment } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const App = () => {
  const mobile = (window.innerWidth <= 600? true : false);
  const [activeMenuElement, setActiveMenuElement] = useState('0');
  console.log(window.innerWidth);
  
  return (
    <div>
      <Router>
        <Segment inverted vertical style={{ padding: 0.1, margin: 0 }}>
          <Menu inverted secondary style={{ margin: '40px 0px 0px 80px', fontSize: '1.25em' }}>
            <Menu.Item
              active={activeMenuElement === '0'}
              as={Link}
              to="/"
              onClick={()=>{setActiveMenuElement('0');}} >About</Menu.Item>
            <Menu.Item
              active={activeMenuElement === '1'}
              as={Link}
              to="/projects"
              onClick={()=>{setActiveMenuElement('1');}}
              name="My Projects"/>
          </Menu>
          
        </Segment>
        <Route exact path="/" render={() => <Home mobile = {mobile}/>} />
      </Router>

    </div>
  );
};

export default App;
