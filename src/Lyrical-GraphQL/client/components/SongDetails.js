import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import fetchSongQuery from '../queries/fetchSong';
import CreateLyric from './CreateLyric';
import LyricList from "./LyricList";

class SongDetails extends Component {
  render() {

    const { song } = this.props.data;

    if (!song) {
      return null;
    }

    return (
      <div>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <CreateLyric songId={this.props.params.id } />
      </div>
    );
  }
}


export default graphql(fetchSongQuery, {
  options: (props) => { return { variables: { id: props.params.id }}}
})(SongDetails);
