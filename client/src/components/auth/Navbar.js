
import React, { Component } from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logoutUser} from '../../actions/authAction';
import {Link} from 'react-router-dom';


 class Navbar extends Component {
 onLogoutClick(e){
   e.preventDefault();
   this.props.logoutUser();
 }

  render() {
    const {isAuthenticated,user} = this.props.auth;

  
  //when the user is logged in
  const authLinks= (<ul className="navbar-nav ml-auto">
  <li className="nav-item">
    <a href="" onClick={this.onLogoutClick.bind(this)}
    className="nav-link">
      <img
        className="rounded-circle"
        src={user.avatar}
        alt={user.name}
        style={{width: '25px', marginRight: '5px'}}
        title="You must have a gravatar connected to your email to display an image"
        />
      <Link to="/">Logout</Link>
    </a>
  </li>
</ul>); 
const guestLinks= (<div></div>);
  
  /* <li className="nav-item">
    <Link className="nav-link" to="/feed">
      Post Feed
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/dashboard">
      Dashboard
    </Link>
  </li> */
  
    return (
      <nav className="navbar navbar-expand-sm navbar-dark  mb-4">
    <div className="container">
      {/* <Link className="navbar-brand" to="/">DevConnector</Link> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
        {/* <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/profiles"> Developers
            </Link>
          </li>
        </ul> */}
        {isAuthenticated ? authLinks:guestLinks}
      </div>
    </div>
  </nav>
    )
  }
  
}
Navbar.propTypes={
  logoutUser:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect (mapStateToProps,{logoutUser})(Navbar);