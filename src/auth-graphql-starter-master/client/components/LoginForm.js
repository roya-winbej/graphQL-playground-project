import React from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import AuthForm from "./AuthForm";
import LoginMutation from '../mutations/login';
import currenUserQuery from  '../queries/currentUser';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = { errors: [] }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.data.user && !this.props.data.user) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({email, password}) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query: currenUserQuery}]
    }).catch(res => {
      const errors = res.graphQLErrors.map(err => err.message);

      this.setState({ errors });
    });
  }

  render() {
    return (
      <div className="container">
        <h3>Login</h3>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

export default graphql(currenUserQuery)(graphql(LoginMutation)(LoginForm));
