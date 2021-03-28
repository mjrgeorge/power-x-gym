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
import ClassSchedule from './components/classSchedule/ClassSchedule';
import PricePlan from './components/pricePlan/PricePlan';
import MembershipData from './components/membership/MembershipData';

export const userContext = createContext();

function App() {
  return (
    <userContext.Provider value="">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/class">
            <OurClasses />
          </Route>
          <Route path="/schedule/:classSchedule">
            <ClassSchedule />
          </Route>
          <Route path="/pricePlan">
            <PricePlan />
          </Route>
          <Route path="/membership/:packageName">
            <MembershipData />
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
