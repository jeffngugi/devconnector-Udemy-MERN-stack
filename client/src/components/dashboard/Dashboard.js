import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import { Link } from 'react-router-dom';
import ProfileActions from './ProfileActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = (
        <h4>
          <Spinner />{' '}
        </h4>
      );
    } else {
      //check if logged in user has profile user
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className='lead text-muted'>
              Welcome{' '}
              <Link to={`/profile/${profile.handle}`}>{user.name} </Link>{' '}
            </p>
            <ProfileActions />
            {/* To do exprerience and education */}
            <div style={{ marginBottom: '60px' }}>
              <button
                className='btn btn-danger'
                onClick={this.onDeleteClick.bind(this)}
              >
                Delete my account
              </button>
            </div>
          </div>
        );
      } else {
        //USer is logge in but has no profile
        dashboardContent = (
          <div>
            <p className='lead text-muted'> Welcome {user.name}</p>
            <p> You have not yet set up a profile. Please add info </p>
            <Link to='/create-profile' className='btn btn-lg btn-info'>
              Create Profile
            </Link>
          </div>
        );
      }
    }
    return (
      <div className='dashboard'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1> Dashboard </h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
