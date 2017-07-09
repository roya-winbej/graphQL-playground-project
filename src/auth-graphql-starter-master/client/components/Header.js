import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import currentUserQuery from '../queries/currentUser.js';

class Header extends React.Component {

  renderButtons() {
    const { user, loading } = this.props.data;

    if (loading) {
      return <div />;
    }

    if (user) {
      return <div>Logout</div>;
    } else {
      return (
        <ul className="right">
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <div>
        <nav className="nav-wrapper">
          {this.renderButtons()}
        </nav>
      </div>
    );
  }
}

export default graphql(currentUserQuery)(Header);
