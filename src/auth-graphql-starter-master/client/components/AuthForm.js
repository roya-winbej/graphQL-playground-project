import React, {Component} from 'react';

class AuthForm extends Component {

  constructor(props) {
    super(props);

    this.state = { email: '', password: ''}
  }

  onSubmit(e) {

    e.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="row">
        <form className="col s4" onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input placeholder="Email" onChange={e => this.setState({email: e.target.value})} type="text" value={this.state.email} />
          </div>
          <div className="input-field">
            <input placeholder="Password" onChange={e => this.setState({password: e.target.value})} type="password" value={this.state.password} />
          </div>

          {this.props.errors && <div>
            {this.props.errors.map((err, i) => <div key={i}>{err}</div>)}
          </div>}

          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
