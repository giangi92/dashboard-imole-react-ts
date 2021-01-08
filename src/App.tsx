import React, { useState } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Routes from './routes';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import BottomBar from './components/bottombar';
import MyProSidebar from './components/pro-sidebar';

function App() {
  const [ shrinkPage, setShrink ] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value: boolean) => {
    setToggled(value);
  };

  return (
    <div>
      <div>
        <Router>
          <Navbar></Navbar>
          {/* <Sidebar shrinkMenu={shrinkPage} setShrinkMenu={setShrink}></Sidebar> */}
          <MyProSidebar shrinkMenu={shrinkPage} setShrinkMenu={setShrink} toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
          <div>
            <Switch>
              {Routes.children.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={ <route.component shrinkPage={shrinkPage} handleToggleSidebar={handleToggleSidebar} /> }
                />
              ))}
              {Routes.render.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props) => (<route.component shrinkPage={shrinkPage} handleToggleSidebar={handleToggleSidebar} {...props} />)}
                />
              ))}
            </Switch>
          </div>
        </Router>
      </div>
      
      <BottomBar shrinkPage={shrinkPage}></BottomBar>
    </div>
  );
}

export default App;
