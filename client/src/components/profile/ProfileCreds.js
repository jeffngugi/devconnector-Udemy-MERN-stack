import React, { Component } from 'react';
import Moment from 'react-moment';
class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;
    const expItems = experience.map((exp) => (
      <li key={exp._id} className='list-group-item'>
        <h4>{exp.company}</h4>
        <p>
          <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -{' '}
          {exp.to === null ? (
            'Now'
          ) : (
            <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position :{exp.title}</strong>
        </p>
        <p>
          {exp.location === null ? (
            ''
          ) : (
            <span>
              {' '}
              <strong>Location : {exp.location}</strong>
            </span>
          )}
        </p>
        <p>
          {exp.description === null ? (
            ''
          ) : (
            <span>
              {' '}
              <strong>Description : {exp.description}</strong>
            </span>
          )}
        </p>
      </li>
    ));

    const eduItems = education.map((edu) => (
      <li key={edu._id} className='list-group-item'>
        <h4>{edu.school}</h4>
        <p>
          <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '}
          {edu.to === null ? (
            'Now'
          ) : (
            <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree :{edu.degree}</strong>
        </p>
        <p>
          <strong>Field Of Study :{edu.fieldofstudy}</strong>
        </p>

        <p>
          {edu.description === null ? (
            ''
          ) : (
            <span>
              {' '}
              <strong>Description : {edu.description}</strong>
            </span>
          )}
        </p>
      </li>
    ));
    return (
      <div className='row'>
        <div className='col-md-6'>
          <h3 className='text-center text-info'>Experience</h3>
          {expItems.length > 0 ? (
            <ul className='list-group'>{expItems}</ul>
          ) : (
            <p className='text-center'>No experience listed</p>
          )}
        </div>
        <div className='col-md-6'>
          <h3 className='text-center text-info'>Education</h3>
          {eduItems.length > 0 ? (
            <ul className='list-group'>{eduItems}</ul>
          ) : (
            <p className='text-center'>No education listed</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
