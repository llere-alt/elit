import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import users from './mockData';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Home users={users} />} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route
            exact
            path='/members/:name'
            render={({ match }) => <UserProfile match={match} users={users} />}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
