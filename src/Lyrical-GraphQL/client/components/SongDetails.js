import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import fetchSongQuery from '../queries/fetchSong';

class SongDetails extends Component {
  render() {

    const { song } = this.props.data;

    if (!song) {
      return null;
    }

    return (
      <div>
        <h3>{song.title}</h3>
      </div>
    );
  }
}


export default graphql(fetchSongQuery, {
  options: (props) => { return { variables: { id: props.params.id }}}
})(SongDetails);
