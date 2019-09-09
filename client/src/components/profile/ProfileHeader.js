import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className='card card-body bg-info text-white mb-3'>
            <div className='row'>
              <div className='col-4 col-md-3 m-auto'>
                <img
                  className='rounded-circle'
                  src={profile.user.avatar}
                  alt=''
                />
              </div>
            </div>
            <div className='text-center'>
              <h1 className='display-4 text-center'>{profile.user.name}</h1>
              <p className='lead text-center'>
                {profile.status}{' '}
                {isEmpty(
                  profile.company ? null : <spam>at {profile.company}</spam>
                )}{' '}
              </p>
              {isEmpty(profile.location ? null : <p>at {profile.location}</p>)}
              <p>
                {isEmpty(profile.website) ? null : (
                  <a
                    className='text-white p-2'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={profile.website}
                  >
                    <i className='fas fa-globe fa-2x'></i>
                  </a>
                )}

                {isEmpty(profile.social && profile.social.twitter) ? null : (
                  <a
                    className='text-white p-2'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={profile.social.twitter}
                  >
                    <i className='fab fa-twitter fa-2x'></i>
                  </a>
                )}

                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <a
                    className='text-white p-2'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={profile.social.facebook}
                  >
                    <i className='fab fa-facebook fa-2x'></i>
                  </a>
                )}

                {isEmpty(profile.social && profile.social.linkedin) ? null : (
                  <a
                    className='text-white p-2'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={profile.social.linkedin}
                  >
                    <i className='fab fa-linkedin fa-2x'></i>
                  </a>
                )}

                {isEmpty(profile.social && profile.social.instagram) ? null : (
                  <a
                    className='text-white p-2'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={profile.social.instagram}
                  >
                    <i className='fab fa-instagram fa-2x'></i>
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
