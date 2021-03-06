import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import store from './store';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/common/PrivateRoute';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import AddExperience from './components/add-credentials/AddExperience';
import AddEducation from './components/add-credentials/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import NotFound from './components/not-found/NotFound';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
//check for token
if (localStorage.jwtToken) {
  //Set authtoken header auth
  setAuthToken(localStorage.jwtToken);
  //decode token
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //check for expired token
  const currentTime = Date.now() / 5000;
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());

    //TODOclear current profile
    //redirect to login
    window.location.href = '/login';
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Navbar />

            <Route path='/' exact component={Landing} />
            <div className='container'>
              <Route path='/register' exact component={Register} />
              <Route path='/login' exact component={Login} />
              <Route path='/profiles' exact component={Profiles} />
              <Route path='/profile/:handle' exact component={Profile} />
              <Route path='/not-found' exact component={NotFound} />

              <Switch>
                <PrivateRoute path='/dashboard' exact component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  path='/create-profile'
                  exact
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  path='/edit-profile'
                  exact
                  component={EditProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  path='/add-experience'
                  exact
                  component={AddExperience}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  path='/add-education'
                  exact
                  component={AddEducation}
                />
              </Switch>
              <Switch>
                <PrivateRoute path='/feed' exact component={Posts} />
              </Switch>
              <Switch>
                <PrivateRoute path='/post/:id' exact component={Post} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
