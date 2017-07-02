import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import addLyricToSongQuery from '../queries/addLyricToSong';

class CreateLyric extends Component {

  constructor(props) {
    super(props);

    this.state = { content: '' }
  }

  addLyricToSong(e) {
    e.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId,
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addLyricToSong.bind(this)}>
          <label htmlFor="lyric">Add lyric</label>
          <input onChange={(e) => this.setState({content: e.target.value })} id="lyric" type="text"/>
        </form>
      </div>
    );
  }
}


export default graphql(addLyricToSongQuery)(CreateLyric);
