import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/Home.js';
import NotMatch from './components/notMatch/NotMatch';
import OurClasses from './components/ourClasses/OurClasses';
import { createContext } from 'react';
import { useState } from 'react';

export const userContext = createContext();

function App() {
  const [pathName, setPathName] = useState("");
  return (
    <userContext.Provider value={[pathName, setPathName]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/class/:ourClass">
            <OurClasses />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
