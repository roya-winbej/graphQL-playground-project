import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import addSongQuery from '../queries/addSong';
import fetchSongsQuery from '../queries/fetchSongs';


class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {title: ''}
  }

  submitSong(e) {
    e.preventDefault();

    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{ query: fetchSongsQuery }]
    }).then(() => hashHistory.push("/"));
  }

  render() {
    return (
      <div>
        <h3>Create new song</h3>
        <form onSubmit={this.submitSong.bind(this)}>
          <label htmlFor="songTitle">Song title: </label>
          <input
            onChange={evt => this.setState({title: evt.target.value})}
            value={this.state.value}
            id="songTitle" type="text"/>
        </form>
      </div>
    );
  }
}



export default graphql(addSongQuery)(SongCreate);
