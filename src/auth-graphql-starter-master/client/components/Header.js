import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import currentUserQuery from '../queries/currentUser.js';
import logoutMutation from '../mutations/logout';

class Header extends React.Component {

  logout() {
    this.props.mutate({
      refetchQueries: [{ query: currentUserQuery }]
    });
  }

  renderButtons() {
    const { user, loading } = this.props.data;

    if (loading) {
      return <div />;
    }

    if (user) {
      return <div>
        <a className="right" href="javascript:;" onClick={this.logout.bind(this)}>Logout</a>
      </div>;
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
        <nav className="nav-wrapper" style={{padding: '0 20px'}}>
          {this.renderButtons()}
        </nav>
      </div>
    );
  }
}

export default graphql(logoutMutation)(graphql(currentUserQuery)(Header));
