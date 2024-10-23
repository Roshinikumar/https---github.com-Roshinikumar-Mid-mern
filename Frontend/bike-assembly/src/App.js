import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import BikeSelection from './components/BikeSelection';
import AdminDashboard from './components/AdminDashboard';
 


const App = () => {
  return (

    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/bike-selection" component={BikeSelection} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
      </Switch>
    </Router>
  );
};

export default App;
