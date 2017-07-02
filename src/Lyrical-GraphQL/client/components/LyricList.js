import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import  addLikeQuery from '../queries/addLikeToLyric';

class LyricList extends Component {

  onLike(id) {
    this.props.mutate({
      variables: {
        id
      }
    });
  }

  render() {
    return (
      <div>
        <h6>Lyric list</h6>
        <ul className="collection">
          {this.props.lyrics.map(({id, content, likes }) => (
            <li className="collection-item" key={id} onClick={() => this.onLike(id)}>
              <i className="material-icons right">thumb_up</i>
              <span className="right">{likes}</span>
              {content}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default graphql(addLikeQuery)(LyricList);
