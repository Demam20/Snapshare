import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';

import Spinner from '../common/Spinner';
import { getProfileByUsername } from '../../actions/profileActions';

class Profile extends Component {
  componentDidMount(){
    if (this.props.match.params.Username){
      this.props.getProfileByUsername(this.props.match.params.Username);
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.profile.profile === null && this.props.profile.loading){
      this.props.history.push('/not-found');
    }
  }
  render(){
    const { profile,loading} = this.props.profile;
    let profileContent;

    if (profile===null || loading){
      profileContent =<Spinner/>;
    }else{
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profiles" className="btn btn-light mb-3 float-left">
                Back To Profiles
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          <ProfileHeader profile={profile} />
         
          
         
        </div>
      );
    }
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}
Profile.propTypes = {
  getProfileByUsername:PropTypes.func.isRequired,
  profile:PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile:state.profile
});
export default connect(mapStateToProps, {getProfileByUsername})(Profile);